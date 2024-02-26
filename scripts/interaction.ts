import { ethers } from "hardhat";

async function main() {
  const payrollFactoryContract = "0xa4AbB92BFfB74E022DA1156db0Be2da3384D2Ae0";
  const PAYROLLFACTORY = await ethers.getContractAt(
    "PayrollFactory",
    payrollFactoryContract
  );

  const createWalletTx = await PAYROLLFACTORY.createPayroll();
  await createWalletTx.wait();

  const clones = await PAYROLLFACTORY.getPayrollClones();

  console.log(clones);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
