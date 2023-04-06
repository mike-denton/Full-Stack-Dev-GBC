
const getWeb3 = async () => {
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3(window.ethereum)
        debugger // BLAH
        try {
            await window.ethereum.request({ method: "eth_requestAccounts" })
        } catch (error) {
            reject(error)
        }
    })
}

export const connectMetaMask = () => {
    console.log(`connect MetaMask handler clicked..`)
    //  const web3 = await getWeb3()
}

// https://docs.metamask.io/guide/rpc-api.html#unrestricted-methods
const addMetaMaskNetwork = () => {
    ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{ 
            chainId: web3.utils.toHex('137'),
            chainName: 'Polygon',
            nativeCurrency: {
                name: 'MATIC',
                symbol: 'MATIC',
                decimals: 18
            },
            rpcUrls: ['https://polygon-rpc.com'],
            blockExplorerUrls: ['https://www.polygonscan.com']
        }],
    })
    .then(() => console.log('network added'))
    .catch(() => console.log('could not add network'))
}

// https://docs.metamask.io/guide/rpc-api.html#unrestricted-methods
const setMetaMaskNetwork = () => {
    ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: web3.utils.toHex('137') }],
    })
    .then(() => console.log('network has been set'))
    .catch((e) => {
        if (e.code === 4902) {
           console.log('network is not available, add it')
        } else {
           console.log('could not set network')
        }
    })
}