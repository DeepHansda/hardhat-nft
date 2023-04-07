//SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
contract BasicNft is ERC721{
    uint256 private s_tokenCounter;
    string private immutable i_tokenUri;
    constructor(string tokenUri) ERC721("Black_Dog","BD"){
        s_tokenCounter = 0;
        s_tokenUri = tokenUri;
    }
    function mintNft(address sender) public {
        _safeMint(to, s_tokenCounter);
        s_tokenCounter=s_tokenCounter+1;
        _setTokenURI(s_tokenCounter,i_tokenUri);
    }

    function tokenURI(uint256 tokenId) public override;
    
}