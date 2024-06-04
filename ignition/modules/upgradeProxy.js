const { ethers, upgrades } = require("hardhat");

const proxyAddress = "0x1E447D444D885FCf28930d5f0E041EE902EAC697";

async function main() {
  const VendingMachineV3 = await ethers.getContractFactory("VendingMachineV3");
  const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV3);

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxyAddress
  );

  console.log("Implementation contract address: " + implementationAddress);
}

main();
