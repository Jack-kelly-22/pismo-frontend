// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

interface IAaveLendingPoolProviderV2 {
    function getLendingPool() external view returns (address);
}
