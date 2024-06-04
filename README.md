# 🚀 Upgradeable Smart Contracts: A New Era of Flexibility

Welcome to the world of **Upgradeable Smart Contracts** in Solidity! These contracts are designed with the future in mind, allowing developers to modify the logic or functionality of a contract without the need for redeployment. This opens up a new realm of possibilities for maintaining and improving smart contracts over time.

The magic lies in the separation of a contract’s state (data) from its logic (code). This allows us to update the logic while preserving the existing data. The key players in this game of upgradeability are two types of contracts: the **Proxy Contract** and the **Implementation Contract**.

## 🌉 Proxy Contract: The Bridge to Implementation

The Proxy Contract is the user's point of contact. It serves as a delegate to the actual implementation logic. When users send transactions to the proxy contract, it forwards those calls to the implementation contract, acting as a bridge between the user and the logic.

## 🧠 Implementation Contract: The Logic Behind the Curtain

The Implementation Contract is where the actual logic of the smart contract resides. It can be upgraded without changing the proxy contract, ensuring that existing users continue to interact with the same proxy while benefiting from updated logic.

## 🎯 Project Overview

In this project, we've implemented a proxy contract based on the workings of a simple vending machine (refer to `VendingMachineV1.sol` file). After deploying it, we've improved the functionality of the contract twice, upgrading its functions. Now, `V1`, `V2`, `V3` are implementation contracts and in `upgradeProxy` we've updated the logic of the main proxy Contract which is storing all state data.

## 🚀 Setting Up Project

Run:
`npm init -y` and paste package.json file of this repo in it and then Run: `npm install`.This command will install all the dependecies needed.

## 🔐 .env File Structure

```
ALCHEMY_SEPOLIA_URL=<Your Alchemy API key>
SEPOLIA_PRIVATE_KEY=<Your Sepolia private key>
ETHERSCAN_KEY=<Your Etherscan API key>
```

## 🛠️ Commands

⚠️ **Note:** Always specify the network when deploying and updating contracts.

### Deploying Proxy Contract

```
npx hardhat run ignition/modules/deploy.js --network sepolia
```

### Upgrading Implementation Contract

```
npx hardhat run ignition/modules/upgradeProxy.js --network sepolia
```

### Verifying Implementation Contract

```
npx hardhat verify --network sepolia YOUR_IMPLEMENTATION_ADDRESS
```

## 🎮 Interacting with deployed contract

### Run following commands

```
npx hardhat console --network sepolia
```

This will start a server on your system linked to Sepolia testnet.

```
const contractInstance=await ethers.getContractFactory("<Name of latest implementation contract>")
```

In this project latest will be "VendingMachineV3".

```
const contract=await contractInstance.attach(<Proxy contract address>)
```

This command will allow us to call contract functions like:

```
await contract.purchaseSoda()
```

This will execute the contract function from your sepolia account to that contract.
