const { run } = require("hardhat");

const verify = async (address, args) => {
  console.log("Verifying contract.........");
  await run("verify:verify", {
    address: address,
    constructorArguments: args,
  })
    .then((res) => {
      console.log("verified.");
      console.log(res);
    })
    .catch((err) => console.log(err));
};

module.exports = { verify };
