//SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract BasicNft is ERC721URIStorage {
    uint256 private s_tokenCounter;
    string private s_tokenUri;
    address private immutable i_sender;

    constructor(address sender, string memory tokenUri)
        ERC721("Black_Dog", "BD")
    {
        s_tokenCounter = 0;
        i_sender = sender;
        s_tokenUri = tokenUri;
    }

    function mintNft() public {
        _safeMint(i_sender, s_tokenCounter);
        _setTokenURI(s_tokenCounter,s_tokenUri);
        s_tokenCounter = s_tokenCounter + 1;
    }

    // function tokenURI(uint256 tokenId) public view override returns (string memory) {
    //     return s_tokenUri;
    // }

    function getCounter() public view returns (uint256){
        return s_tokenCounter;
    }
}
