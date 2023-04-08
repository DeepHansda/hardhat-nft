require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("hardhat-deploy");

/** @type import('hardhat/config').HardhatUserConfig */

const rpcURL = process.env.RPC_URL || "";
const privateKey = process.env.PRIVATE_KEY || "";
const etherscanKey = process.env.ETHERSCAN_KEY;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      chainId: 31337,
    },
    sepolia: {
      url: rpcURL,
      chainId: 11155111,
      accounts: [privateKey],
      blockConfirmations: 6,
    },
  },
  etherscan: {
    apiKey: etherscanKey,
  },
  namedAccounts: {
    deployer: {
      default: 0,
      1: 0,
    },
  },
  solidity: "0.8.18",
};
