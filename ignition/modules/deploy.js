const { ethers, upgrades } = require("hardhat");

async function main() {
  const VendingMachineV1 = await ethers.getContractFactory("VendingMachineV1");
  const proxy = await upgrades.deployProxy(VendingMachineV1, [100]);
  await proxy.waitForDeployment(); //first wait for deployment to complete

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    await proxy.getAddress() //get the address of the proxy which should be awaited to get
  );

  console.log("Proxy contract address: " + (await proxy.getAddress()));

  console.log("Implementation contract address: " + implementationAddress);
}

main();

// Proxy contract address: 0x1E447D444D885FCf28930d5f0E041EE902EAC697
