# update the truffle-config.js to use latest version of solidity v 8.4
`compilers.sold.version 0.8.20`

# compile the solidity smart contracts with cli 
`rm -rf build`
`truffle compile`

# test contracts on local development blockchain using truffle
`truffle test`

# run local truffle dev blockchain ganache
`truffle develop`

# run the truffle migrate command on the truffle(develop)> command prompt to deploy smart contract
`migrate --reset`