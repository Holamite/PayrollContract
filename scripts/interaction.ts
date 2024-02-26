import { ethers } from "hardhat";

async function main() {
  const payrollFactoryContract = "0x85f71b0b130607C8f400C8FC6b741aC2f01399FB";
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
