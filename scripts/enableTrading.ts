import { ethers } from "hardhat";

async function main() {
    const token = await ethers.getContractAt("TokenFee", "0xcC60Be2808981C699Cd0C196D0E6247f9050DC42")
    const res = await token.enableTrading();
    console.log(res);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});