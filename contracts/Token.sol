//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9; // Define solidity version

import "hardhat/console.sol"; // hardhat/console.sol contarct import

contract Token {
  string public name = "My Hardhat Token"; // Define string type var name 
  string public symbol = "MHT"; // Define string type var symbol

  uint256 public totalSupply = 1000000; // Define uint256 type var totalSupply

  mapping (address => uint256) balances; // Define mapping type var balances

  event Transfer(address indexed _from, address indexed _to, uint256 _value); 
  // Define event function Transfer

  constructor() { // Define constructor function
    balances[msg.sender] = totalSupply; 
    // smart contract의 실행주소를 key로, totalSupplay(1000000)를 value로 할당
    // addresst type var owner에 msg.sender 할당
  }

function transfer(address to, uint256 amount) external {
    require(balances[msg.sender] >= amount, "Not enough tokens");

    console.log(
        "Transferring from %s to %s %s tokens",
        msg.sender,
        to,
        amount
    );

    balances[msg.sender] -= amount;
    balances[to] += amount;

    emit Transfer(msg.sender, to, amount);
}

  function balanceOf(address account) external view returns(uint256) {
    return balances[account];
  }
}