// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
import "../Payroll.sol";

interface IpayrollFactory {
    function createPayroll()
        external
        returns (Payroll newPayroll_, uint length_);

    function getPayrollClones() external view returns (Payroll[] memory);
}
