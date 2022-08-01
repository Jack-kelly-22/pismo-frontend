import { LimitOrderProtocolFacade, Web3ProviderConnector } from "@1inch/limit-order-protocol";
// import { Web3Provider } from "@ethersproject/providers";
// import Web3 from 'web3';
export const Inch = () => {
    console.log("calling inch");
}

const baseContract = '0x5fa31604fc5dcebfcac2481f9fa59d174126e5e6'
// const walletAddress = '0x5fa31604fc5dcebfcac2481f9fa59d174126e5e6'

const createLimitOrderFacade = (limitContractAddresss:string, provider:any) => { 
    const connector = new Web3ProviderConnector(provider);
    //  address of orderbook contract on the network
    new LimitOrderProtocolFacade(
        limitContractAddresss,
        connector
    );
}
    

export const listCoveredCall = async () => {
    console.log("list covered call");

}
