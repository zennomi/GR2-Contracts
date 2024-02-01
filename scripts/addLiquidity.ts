import { ethers } from "hardhat";

const maxDeadLine = 9999999999;

async function main() {
    const accounts = await ethers.getSigners()
    const routerAddress = "0xC532a74256D3Db42D0Bf7a0400fEFDbad7694008"
    const tokenAddress = "0xcC60Be2808981C699Cd0C196D0E6247f9050DC42"
    const token = await ethers.getContractAt("TokenFee", tokenAddress)
    const router = await ethers.getContractAt("UniswapV2Router02", routerAddress)

    // const approveTx = await token.approve(
    //     routerAddress,
    //     ethers.MaxUint256,
    //     { gasLimit: 1000000 }
    // )

    // await approveTx.wait()

    // console.info("Approved!")

    const tx = await router.addLiquidityETH(
        tokenAddress,
        ethers.parseEther("1000"),
        0,
        0,
        accounts[0].address,
        maxDeadLine,
        { gasLimit: 5000000, value: ethers.parseEther("0.0001") }
    )

    await tx.wait()

    console.info("Added!", tx.hash)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});