// SPDX-License-Identifier: MIT

pragma solidity ^0.8.2;

import "/CoveNFT.sol";
import "/CoveVault.sol";

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/math/SafeMath.sol";

// Cove = covered call

contract PismoMarketplace {

    struct CoveVault {
        uint256 colleteral;
        uint duration;
        uint256 strikePrice;
        uint256 vaultId;
        uint256 vaultBalance;
    }

    mapping(uint => uint) public lockTime;
    mapping(CoveVault => uint) private vaults;
    uint public vaultCount = 0;

    // Covered Call Writer / Seller Functions

    function writeCove(_collateral, _duration, _strikePrice) {

        //  **************************************
        //  askPrice: writer requests own price
        //  DecayFunction will automatically lower price as time goes on
        //  **************************************

        //  **************************************
        //  Colleteral options: any amount of collateral -> minimum = .01
        //  Specified through frontend
        //  **************************************

        // initialize a cove vault
        vaultCount++;
        CoveVault storage vault;   
        vault.vaultID = vaultCount;
        vault.collateral = _collateral;
        vault.duration = _duration;
        vault.strikePrice = _strikePrice;
        vaults[vaultCount] = vault;

        // lock collateral from seller into Pismo contract balance
        vaults[vaultCount].vaultBalance = colleteral;
        lockTime[vaultCount] = block.timestamp + uint(vaults[vaultCount].duration) weeks;

        // list that NFT on marketplace
        addCoveToMarketplace()

    }

    // function decayPrice() {

    // }

    function addCoveToMarketplace(coveNFT) {
        // add trasnferrability params to coveNFT 
        // add cove to array of coves
    }


    // Covered Call Buyer Functions

    function purchaseCove() {
        // take eth from writer and send money to the vault at VaultID specific vaultID

        // bid will be added to a mapping

        // only send eth from vault to seller if

        // if sale goes through, send NFT to buyer

        // cove be delisted from the marketplace once NFT se
    }


    function displayCoves() {
        // show all the unsold coves
    }
    
}