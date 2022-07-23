import { ethers, BigNumber } from "ethers";


export const connectToMetamask = async (provider: any ) => {
    // const provider = new ethers.providers.Web3Provider(window.ethereum)

    const accounts = await provider.send("eth_requestAccounts", []);
    const balance = await provider.getBalance(accounts[0]);
    const balanceInEther = ethers.utils.formatEther(balance);
    console.log(accounts)
    const userData = {
        walletAddress: accounts[0],
        balances : {
            cUSD: balanceInEther,
        }
    }
    console.log("USERDATA:",userData)
    return userData
  }
