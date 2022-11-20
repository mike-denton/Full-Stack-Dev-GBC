

const getWeb3 = async () => {
    debugger;
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3(window.etherum)
        debugger;
        try {
            await window.etherum.request({ method: "eth_requestAccounts "});
            console.log(`web3 request success: ${JSON.stringify(web3)}`)
            resolve(web3)
        } catch (error) {
            console.log(`web3 request error ${error}`)
            reject(error)
        }
    })
}

let getEtherumProvider = async () => {
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
            const web3 = await getWeb3()
        }
        else {
            alert('Metamask etherum not found in browser!')
        }

    })
 
});
