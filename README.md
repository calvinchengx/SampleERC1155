# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/deploy.js
npx hardhat help
```

## Rinkey Faucet

Get some ethers for Rinkey Testnet.

https://faucets.chain.link/rinkeby

## Rinkeby Deployment

```bash
cp .env.sample .env
# provide INFURA_KEY and your Rinkey Wallet's private key

# now, we can simply deploy
npx hardhat run scripts/deploy.js --network rinkeby
```
