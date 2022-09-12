// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@chainlink/contracts/src/v0.8/interfaces/LinkTokenInterface.sol";
import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";
import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";

struct Flip {
    address user;
    uint256 timestamp;
    uint256 flipNumber;
    bool win;
}

contract CoinFlip is VRFConsumerBaseV2 {
    VRFCoordinatorV2Interface COORDINATOR;
    LinkTokenInterface LINKTOKEN;
    // Your subscription ID.
    uint64 s_subscriptionId;

    // Goerli coordinator. For other networks,
    // see https://docs.chain.link/docs/vrf-contracts/#configurations
    address vrfCoordinator = 0x6A2AAd07396B36Fe02a22b33cf443582f682c82f;

    // Goerli LINK token contract. For other networks, see
    // https://docs.chain.link/docs/vrf-contracts/#configurations
    address link_token_contract = 0x84b9B910527Ad5C03A9Ca831909E21e236EA7b06;

    // The gas lane to use, which specifies the maximum gas price to bump to.
    // For a list of available gas lanes on each network,
    // see https://docs.chain.link/docs/vrf-contracts/#configurations
    bytes32 keyHash =
        0xd4bb89654db74673a187bd804519e65e3f71a52bc55f11da7601a13dcf505314;

    // Depends on the number of requested values that you want sent to the
    // fulfillRandomWords() function. Storing each word costs about 20,000 gas,
    // so 100,000 is a safe default for this example contract. Test and adjust
    // this limit based on the network that you select, the size of the request,
    // and the processing of the callback request in the fulfillRandomWords()
    // function.
    uint32 callbackGasLimit = 100000;

    // The default is 3, but you can set this higher.
    uint16 requestConfirmations = 3;

    // For this example, retrieve 2 random values in one request.
    // Cannot exceed VRFCoordinatorV2.MAX_NUM_WORDS.
    uint32 numWords = 3;

    uint256[] public s_randomWords;
    uint256 public s_requestId;
    address public s_owner;
    uint256 public wordsIndex = 0; // todo set to private in mainnet

    // FLIP---------------------------------------------------------------------
    mapping(uint256 => Flip) public usersFlips;
    uint256 public usersFlipsCounter;
    uint256 public reservedBnbForBuyLink = 0; // todo set to private in mainnet
    uint256 public reservedBnbHolders = 0; // todo set to private in mainnet
    uint256 public reservedBnbForBuyLinkPercentage = 10; // todo set to private in mainnet
    uint256 public reserveBnbPercentageForHolders = 3; // todo set to private in mainnet
    uint256 public distributeBnbHoldersThreshold = 100000000000000000; // todo set to private in mainnet
    uint256 public buyLinkThreshold = 100000000000000000; // todo set to private in mainnet

    IUniswapV2Router02 public dexRouter;

    modifier onlyOwner() {
        require(msg.sender == s_owner);
        _;
    }

    constructor() VRFConsumerBaseV2(vrfCoordinator) {
        COORDINATOR = VRFCoordinatorV2Interface(vrfCoordinator);
        LINKTOKEN = LinkTokenInterface(link_token_contract);
        s_owner = msg.sender;
        //Create a new subscription when you deploy the contract.
        createNewSubscription();

        usersFlipsCounter = 0;
        dexRouter = IUniswapV2Router02(
            0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3
        );
    }

    receive() external payable {}

    fallback() external payable {}

    // Assumes the subscription is funded sufficiently.
    function requestRandomWordsFromContract() internal {
        // Will revert if subscription is not set and funded.
        s_requestId = COORDINATOR.requestRandomWords(
            keyHash,
            s_subscriptionId,
            requestConfirmations,
            callbackGasLimit,
            numWords
        );
    }

    // Assumes the subscription is funded sufficiently.
    function requestRandomWords() external onlyOwner {
        // Will revert if subscription is not set and funded.
        s_requestId = COORDINATOR.requestRandomWords(
            keyHash,
            s_subscriptionId,
            requestConfirmations,
            callbackGasLimit,
            numWords
        );
    }

    function fulfillRandomWords(
        uint256, /* requestId */
        uint256[] memory randomWords
    ) internal override {
        s_randomWords = randomWords;
    }

    // get the details of the subscription
    function getSubscriptionDetails()
        external
        view
        returns (
            uint96 balance,
            uint64 reqCount,
            address owner,
            address[] memory consumers
        )
    {
        return COORDINATOR.getSubscription(s_subscriptionId);
    }

    // check if pending requests Exist
    function pendingRequestExists() external view returns (bool) {
        (, bytes memory returnData) = address(COORDINATOR).staticcall(
            abi.encodeWithSignature(
                "pendingRequestExists(uint64)",
                s_subscriptionId
            )
        );
        return abi.decode(returnData, (bool));
    }

    // Create a new subscription when the contract is initially deployed.
    function createNewSubscription() private onlyOwner {
        s_subscriptionId = COORDINATOR.createSubscription();
        // Add this contract as a consumer of its own subscription.
        COORDINATOR.addConsumer(s_subscriptionId, address(this));
    }

    // Assumes this contract owns link.
    // 1000000000000000000 = 1 LINK
    function topUpSubscriptionFromContract() internal {
        uint256 linkBalance = LINKTOKEN.balanceOf(address(this));
        require(linkBalance > 0, "Zero link balance");
        LINKTOKEN.transferAndCall(
            address(COORDINATOR),
            linkBalance,
            abi.encode(s_subscriptionId)
        );
    }

    // Assumes this contract owns link.
    // 1000000000000000000 = 1 LINK
    function topUpSubscription() external onlyOwner {
        topUpSubscriptionFromContract();
    }

    function cancelSubscription() external onlyOwner {
        // Cancel the subscription and send the remaining LINK to a wallet address.
        COORDINATOR.cancelSubscription(s_subscriptionId, s_owner);
        s_subscriptionId = 0;
    }

    // Transfer this contract's funds to an address.
    // 1000000000000000000 = 1 LINK
    function withdrawLink() external onlyOwner {
        LINKTOKEN.transfer(s_owner, LINKTOKEN.balanceOf(address(this)));
    }

    // Link balance of the contract
    function getLinkBalance() external view returns (uint256 balance) {
        return LINKTOKEN.balanceOf(address(this));
    }

    // Assumes this contract owns link
    // This method functions similarly to VRFv1, but you must estimate LINK costs
    // yourself based on the gas lane and limits.
    // 1000000000000000000 = 1 LINK
    function fundAndRequestRandomWords() external onlyOwner {
        topUpSubscriptionFromContract();
        // Will revert if subscription is not set and funded.
        s_requestId = COORDINATOR.requestRandomWords(
            keyHash,
            s_subscriptionId,
            requestConfirmations,
            callbackGasLimit,
            numWords
        );
    }

    // FLIP---------------------------------------------------------------------
    function updateThresholds(uint256 val1, uint256 val2) private onlyOwner {
        distributeBnbHoldersThreshold = val1; // todo set to private in mainnet
        buyLinkThreshold = val2; // todo set to private in mainnet
    }

    function calcRequiredAmount(uint256 mode) internal pure returns (uint256) {
        uint256 requiredAmount = 0;
        if (mode == 0) {
            requiredAmount = 50000000000000000; // 0.1 BNB
        } else if (mode == 1) {
            requiredAmount = 100000000000000000; // 0.1 BNB
        } else if (mode == 2) {
            requiredAmount = 250000000000000000; // 0.25 BNB
        } else if (mode == 3) {
            requiredAmount = 500000000000000000; // 0.5 BNB
        } else if (mode == 4) {
            requiredAmount = 1000000000000000000; // 1 BNB
        } else if (mode == 5) {
            requiredAmount = 2000000000000000000; // 2 BNB
        } else {
            revert("invalid mode");
        }
        return requiredAmount;
    }

    function flipCoin(bool bet, uint256 mode) external payable {
        uint256 requiredAmount = calcRequiredAmount(mode);
        require(msg.value >= requiredAmount, "Low amount");

        uint256 flipResult = s_randomWords[wordsIndex];
        bool win;
        if (bet) {
            win = flipResult % 2 == 0;
        } else {
            win = flipResult % 2 != 0;
        }

        Flip memory flip = Flip(msg.sender, block.timestamp, flipResult, win);
        usersFlips[usersFlipsCounter] = flip;
        wordsIndex++;
        usersFlipsCounter++;
        if (wordsIndex == 2) {
            wordsIndex = 0;
            requestRandomWordsFromContract();
        }

        // buy link
        uint256 amountForBuyLink = (msg.value *
            reservedBnbForBuyLinkPercentage) / 100;
        uint256 amountForHolders = (msg.value *
            reserveBnbPercentageForHolders) / 100;
        reservedBnbForBuyLink += amountForBuyLink;
        reservedBnbHolders += amountForHolders;

        // Distribute to holders
        if (reservedBnbHolders >= distributeBnbHoldersThreshold) {}

        // buy link and top up
        if (reservedBnbForBuyLink >= buyLinkThreshold) {
            swapBnbForLink();
            topUpSubscriptionFromContract();
            reservedBnbForBuyLink = 0;
            reservedBnbHolders = 0;
        }

        // send winnner amount
        if (win) {
            payable(msg.sender).transfer((msg.value * 2));
        }
    }

    // return the route given the busd addresses and the token
    function pathTokensForTokens(address add1, address add2)
        private
        pure
        returns (address[] memory)
    {
        address[] memory path = new address[](2);
        path[0] = add1;
        path[1] = add2;
        return path;
    }

    function swapBnbForLink() internal {
        address[] memory path = pathTokensForTokens(
            dexRouter.WETH(),
            link_token_contract
        );

        uint256 amountOutIn = dexRouter.getAmountsOut(
            reservedBnbForBuyLink,
            path
        )[1];

        // make the swap
        dexRouter.swapExactETHForTokens{value: reservedBnbForBuyLink}(
            amountOutIn,
            path,
            address(this),
            block.timestamp + 1000
        );
    }

    function withdrawBnb() public onlyOwner {
        (bool os, ) = payable(s_owner).call{value: address(this).balance}("");
        require(os);
    }
}
