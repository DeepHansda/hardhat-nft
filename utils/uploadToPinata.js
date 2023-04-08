const pinataSdk = require("@pinata/sdk");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const pinataSecret = process.env.PANATA_SECRET || "";
const pinataKey = process.env.PINATA_KEY || "";
const pinata = new pinataSdk(pinataKey, pinataSecret);

const uploadImages = async (imagesFilePath) => {
  const fullImagesPath = path.resolve(imagesFilePath);
  const files = fs
    .readdirSync(fullImagesPath)
    .filter((file) => file.includes(".jpg"));

  const img = files[0];

  const readFileStream = fs.createReadStream(`${fullImagesPath}/${img}`);
  const options = {
    pinataMetadata: {
      name: img.replace(".png" || ".jpg", ""),
    },
  };

  return await pinata
    .pinFileToIPFS(readFileStream, options)
    .then((result) => {
      return { result, img };
    })
    .catch((err) => console.log(err));
};

const uploadMetaData = async (metadata) => {
  const options = {
    pinataMetadata: {
      name: metadata.name,
    },
  };

  return await pinata
    .pinJSONToIPFS(metadata, options)
    .then((res) => {
      return res;
    })
    .catch((error) => console.log(error));
};

module.exports = { uploadImages, uploadMetaData };
