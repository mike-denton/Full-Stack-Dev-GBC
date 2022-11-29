
window.addEventListener('load', async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // Request account access if needed
            await ethereum.enable();
            // Acccounts now exposed
            web3.eth.sendTransaction({/* ... */});
        } catch (error) {
            // User denied account access...
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
        web3.eth.sendTransaction({/* ... */});
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
});

const getWeb3 = async () => {
    debugger;
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3(window.etherum)
        debugger;
        try {
            await window.etherum.request({ method: "eth_requestAccounts"});
            console.log(`web3 request success: ${JSON.stringify(web3)}`)
            resolve(web3)
        } catch (error) {
            console.log(`web3 request error ${error}`)
            reject(error)
        }
    })
}

const ethEnabled = async () => {
    if (window.ethereum) {
      await window.ethereum.request({method: 'eth_requestAccounts'});
      window.web3 = new Web3(window.ethereum);
      return true;
    }
    return false;
  }


let getEtherumProvider = async () => {
    debugger
    if (typeof window.ethereum !== 'undefined') {
      try {
        // Request account access
        await window.ethereum.enable();
        return true
      } catch(e) {
        // User denied access
        return false
      }
    }
    else {
        console.log("Metamask not found")
        return false;
    }
}
window.addEventListener('DOMContentLoaded', (event) => {
    alert('meta - window loaded')


    const button = document.getElementById("connect_button")
    
    button.addEventListener("click", async() => {
        alert('connect wallet - button clicked')
  
        if(await getEtherumProvider()) {
            //const web3 = await getWeb3()
            const mask = await ethEnabled()
        }
        else {
            alert('Metamask etherum not found in browser!')
        }

    })
 
});
