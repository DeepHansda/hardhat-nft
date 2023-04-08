const { ethers, getNamedAccounts, network } = require("hardhat");

const main = async () => {
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
  try {
    const basicNft = await ethers.getContract("BasicNft", deployer);
    const transactionResponse = await basicNft.mintNft();
    transactionResponse.wait(1);
    console.log(
      `Basic NFT index 0 tokenURI: ${await basicNft.tokenURI(0)}`
    );
  } catch (error) {
    console.log(error);
  }
};

main();
