export const switchChain = async (chainId:string) => {
    console.log("switch chain");
        await window.ethereum.request({ method: 'wallet_switchEthereumChain', params:[{chainId: '0x4'}]});
}

