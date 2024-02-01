import { ethers } from "hardhat";

async function main() {
  const RouterAddress = "0xC532a74256D3Db42D0Bf7a0400fEFDbad7694008";
  const MarketingAddress = "0xfe0Ab43d167AC43ca8B875390b51d311dEd67b2A";

  const token = await ethers.deployContract("TokenFee", [RouterAddress, MarketingAddress]);

  await token.waitForDeployment();

  console.log(
    `Deployed to ${token.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
