import { ethers } from "hardhat";

async function main() {
  const payrollContractAddress = "0xcBc884028c8D6d96Ad954DBa5358181273B20812";
  const payrollFactoryContractAddress =
    "0xa4AbB92BFfB74E022DA1156db0Be2da3384D2Ae0";

  const [owner] = await ethers.getSigners();

  const payroll = await ethers.getContractAt(
    "IPayroll",
    payrollContractAddress,
    owner
  );
  const payrollFactory = await ethers.getContractAt(
    "PayrollFactory",
    payrollFactoryContractAddress
  );

  const employeeAddress = "0x4B0897b0513fdC7C541B6d9D7E929C4e5364D2dB";
  const salaryAmount = ethers.parseEther("1");

  const addEmployeeTx = await payroll.addEmployee(
    employeeAddress,
    salaryAmount
  );
  await addEmployeeTx.wait();

  const allEmployees = await payroll.getEmployees();

  console.log("All employees:", allEmployees);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
