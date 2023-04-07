require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork:"hardhat",
  networks:{
    localhost:{
      url:31337,
    }
  },
  namedAccount:{
    deployer:{
      default:0,
      1:0
    }
  },
  solidity: "0.8.18",
};
