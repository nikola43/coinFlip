// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";

struct Flip {
    address user;
    uint256 timestamp;
    uint256 flipNumber;
    bool flipResult;
}

contract CoinFlip is VRFConsumerBaseV2 {
    VRFCoordinatorV2Interface COORDINATOR;

    // Your subscription ID.
    uint64 s_subscriptionId;

    // Goerli coordinator. For other networks,
    // see https://docs.chain.link/docs/vrf-contracts/#configurations
    address vrfCoordinator = 0x6A2AAd07396B36Fe02a22b33cf443582f682c82f;

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
    address s_owner;

    mapping(uint256 => Flip) public usersFlips;
    uint256 private usersFlipsCounter;

    constructor(uint64 subscriptionId) VRFConsumerBaseV2(vrfCoordinator) {
        COORDINATOR = VRFCoordinatorV2Interface(vrfCoordinator);
        s_owner = msg.sender;
        s_subscriptionId = subscriptionId;

        usersFlipsCounter = 0;
    }

    receive() external payable {}

    fallback() external payable {}

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

    modifier onlyOwner() {
        require(msg.sender == s_owner);
        _;
    }

    function getLastFlips() external view returns (Flip[] memory) {
        Flip[] memory flips = new Flip[](usersFlipsCounter);

        for (uint256 index = 0; index < usersFlipsCounter; index++) {
            flips[index] = usersFlips[index];
        }

        return flips;
    }

    function flipCoin(bool bet, uint256 mode) external payable {
        uint256 requiredAmount = 50000000000000000; // 0.05 BNB
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

        require(msg.value >= requiredAmount, "Low amount");

        uint256 flipResult = s_randomWords[0];
        bool win;
        if (bet) {
            win = flipResult % 2 == 0;
        } else {
            win = flipResult % 2 != 0;
        }

        Flip memory flip = Flip(msg.sender, block.timestamp, flipResult, win);

        usersFlipsCounter += 1;
        usersFlips[usersFlipsCounter] = flip;

        if (win) {
            payable(msg.sender).transfer(msg.value * 2);
        }
    }
}