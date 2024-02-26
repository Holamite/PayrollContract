// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IPayroll {
    struct Employee {
        address account;
        uint salary;
    }

    function addEmployee(address _account, uint _salary) external;

    function getEmployees() external view returns (address[] memory);
}
