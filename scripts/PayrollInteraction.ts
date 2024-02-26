import { ethers } from "hardhat";

async function main() {
  const payrollContractAddress = "0x38CFCf59Cc33E8c4A15921483F1309D9C5d2ca62";

  const payroll = await ethers.getContractAt("Payroll", payrollContractAddress);

  const employeeAddress = "0xdD870fA1b7C4700F2BD7f44238821C26f7392148";
  const salaryAmount = ethers.parseEther("1");

  const addEmployeeTx = await payroll.addEmployee(
    employeeAddress,
    salaryAmount
  );
  await addEmployeeTx.wait();

  const allEmployees = await payroll.getEmployees();

  console.log("All employees:", allEmployees, addEmployeeTx);

  const txHash =
    "0xbebc142dffd466a77c991064ccdefce38e357a3e3ad2566f9616756b209fa82f";
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
