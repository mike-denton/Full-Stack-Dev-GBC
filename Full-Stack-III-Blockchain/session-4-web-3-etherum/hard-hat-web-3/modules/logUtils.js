

const logger = (web3) => {

    let options = {
        fromBlock: 0,
        address: ['address-1', 'address-2'],    //Only get events from specific addresses
        topics: []                              //What topics to subscribe to
    };
    
    let subscription = web3.eth.subscribe('logs', {},(err,event) => {
        if (!err)
        console.log(event)
    });
    
    subscription.on('data', event => console.log(event))
    subscription.on('changed', changed => console.log(changed))
    subscription.on('error', err => { throw err })
    subscription.on('connected', nr => console.log(nr))
}

module.exports = {
    logger
}