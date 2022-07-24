// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

interface IAToken {
    function getIncentivesController() external view returns (address);

    function redeem(uint256 amount) external;

    function burn(
        address user,
        address receiverOfUnderlying,
        uint256 amount,
        uint256 index
    ) external;

    function mint(
        address user,
        uint256 amount,
        uint256 index
    ) external;

    function transferUnderlyingTo(address user, uint256 amount) external returns (uint256);

    // function balanceOf(address account) external view returns (uint256);
}
