const { ethers, getNamedAccounts, network } = require("hardhat");

const main = async () => {
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
  try {
    const basicNft = await ethers.getContract("BasicNft", deployer);
    const transactionResponse = await basicNft.mintNft();
    // const tokenId = await basicNft.getCounter();
    transactionResponse.wait(1);
    console.log(
      `Minting completed!`
    );
  } catch (error) {
    console.log(error);
  }
};

main();
