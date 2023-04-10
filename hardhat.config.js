require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("hardhat-deploy");

/** @type import('hardhat/config').HardhatUserConfig */

const sepoliaRpcURL = process.env.SEPOLIA_RPC_URL || "";
const goerliRpcURL = process.env.GOERLI_RPC_URL || "";
const privateKey = process.env.PRIVATE_KEY || "";
const etherscanKey = process.env.ETHERSCAN_KEY || "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      chainId: 31337,
    },
    sepolia: {
      url: sepoliaRpcURL,
      chainId: 11155111,
      accounts: [privateKey],
      blockConfirmations: 6,
    },
    goerli: {
      url: goerliRpcURL,
      chainId: 5,
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
