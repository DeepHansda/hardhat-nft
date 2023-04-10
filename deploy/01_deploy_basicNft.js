const { network } = require("hardhat");
const { uploadImages, uploadMetaData } = require("../utils/uploadToPinata");
const { verify } = require("../utils/verify");
const imagesPath = "./assests/imgs";

module.exports = async ({ getNamedAccounts, deployments }) => {
  const metaTemplate = {
    name: "",
    description: "",
    image: "",
    attributes: [
      {
        type: "God",
        power: 1000000,
      },
    ],
  };
  try {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();

    const { result: imgResponse, img } = await uploadImages(imagesPath);
    let tokenUri = "";

    if (imgResponse) {
      const tokenUriMetaData = { ...metaTemplate };
      tokenUriMetaData.name = img.replace(".png" || ".jpg", "");
      tokenUriMetaData.description = `By order of ${tokenUriMetaData.name}`;
      tokenUriMetaData.image = `ipfs://${imgResponse.IpfsHash}`;

      const metaResponse = await uploadMetaData(tokenUriMetaData);
      tokenUri = `ipfs://${metaResponse.IpfsHash}`;
    }

    if (tokenUri != "") {
      console.log(tokenUri);
      const args = [deployer, tokenUri];

      log("Deploying............");
      await deploy("BasicNft", {
        from: deployer,
        log: true,
        args: args,
        waitConfirmations: network.config.blockConfirmations || 1,
      })
        .then(async (res) => {
          log(`Deployed on ${res.address}`);
          await verify(res.address, args);
        })
        .catch((error) => log(error));
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.tags = ["all", "basicNft"];
