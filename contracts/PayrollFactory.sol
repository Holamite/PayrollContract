// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./Payroll.sol";

contract PayrollFactory {
    Payroll[] PayrollClones;

    function createPayroll()
        external
        returns (Payroll newPayroll_, uint length_)
    {
        newPayroll_ = new Payroll();

        PayrollClones.push(newPayroll_);

        length_ = PayrollClones.length;
    }

    function getPayrollClones() external view returns (Payroll[] memory) {
        return PayrollClones;
    }
}
