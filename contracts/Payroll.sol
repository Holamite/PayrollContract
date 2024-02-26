// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Payroll {
    address public owner;

    struct Employee {
        address account;
        uint salary;
    }

    mapping(address => Employee) public employees;

    address[] public employeeAddresses;

    event EmployeeAdded(address indexed account, uint salary);
    event EmployeeRemoved(address indexed account);
    event EmployeePaid(address indexed account, uint amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function addEmployee(address _account, uint _salary) external onlyOwner {
        require(_account != address(0), "Invalid address");
        require(
            employees[_account].account == address(0),
            "Employee already exists"
        );

        employees[_account] = Employee(_account, _salary);

        employeeAddresses.push(_account);
        emit EmployeeAdded(_account, _salary);
    }

    function removeEmployee(address _account) external onlyOwner {
        require(
            employees[_account].account != address(0),
            "Employee does not exist"
        );

        delete employees[_account];
        emit EmployeeRemoved(_account);
    }

    function payEmployee(address _account) external onlyOwner {
        require(
            employees[_account].account != address(0),
            "Employee does not exist"
        );
        uint paymentAmount = employees[_account].salary;
        payable(_account).transfer(paymentAmount);
        emit EmployeePaid(_account, paymentAmount);
    }

    function getEmployees() external view returns (address[] memory) {
        return employeeAddresses;
    }
}
