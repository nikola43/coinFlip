// SPDX-License-Identifier: MIT
// An example of a consumer contract that relies on a subscription for funding.
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/interfaces/LinkTokenInterface.sol";
import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";
import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";

/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES HARDCODED VALUES FOR CLARITY.
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */

contract TykheLuckyOracle is VRFConsumerBaseV2 {
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
    uint32 numWords = 2;

    uint256[] public s_randomWords;
    uint256 public s_requestId;
    address public s_owner;
    uint256 public wordsIndex = 0; // todo set to private in mainnet

    //---
    IUniswapV2Router02 public dexRouter;

    modifier onlyOwner() {
        require(msg.sender == s_owner);
        _;
    }

    constructor() VRFConsumerBaseV2(vrfCoordinator) {
        dexRouter = IUniswapV2Router02(
            0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3
        );
        COORDINATOR = VRFCoordinatorV2Interface(vrfCoordinator);
        LINKTOKEN = LinkTokenInterface(link_token_contract);
        s_owner = msg.sender;
        //Create a new subscription when you deploy the contract.
        createNewSubscription();
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

    function askOracle(uint256 index) external view returns (uint256) {
        return s_randomWords[index];
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
            1,
            path
        )[1];

        // make the swap
        dexRouter.swapExactETHForTokens{value: 1}(
            amountOutIn,
            path,
            address(this),
            block.timestamp + 1000
        );
    }
}
