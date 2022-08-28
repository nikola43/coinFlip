// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

interface ITykheLuckyOracle {
    function askOracle() external view returns (uint256);
}
