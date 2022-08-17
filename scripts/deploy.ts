import { ethers } from "hardhat";

async function main() {
  const Artwork = await ethers.getContractFactory("Artwork");
  const art = await Artwork.deploy();

  await art.deployed();

  for (let i = 0; i < 50; ++i) {
    await art.mint(i);
  }

  console.log("Address:", art.address);

  const Ytoken = await ethers.getContractFactory("Ytoken");
  const yt = await Ytoken.deploy();

  await yt.deployed();

  console.log("YT Address:", yt.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
