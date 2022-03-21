const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("GameItems contract", function () {
  let GameItems;
  let owner;
  let addr1;
  let addr2;
  let gameItemsToken;

  beforeEach(async function () {
    GameItems = await ethers.getContractFactory("GameItems");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    gameItemsToken = await GameItems.deploy();
    await gameItemsToken.deployed();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(gameItemsToken.signer.address).to.equal(owner.address);
    });
  });
});
