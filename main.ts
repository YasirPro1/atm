#!/usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000;

let myPin = 1234;

let pinAns = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin",
    type: "number",
  },
]);

if (pinAns.pin === myPin) {
  console.log(`Your pin is corrected!!!`);

  let actionAns = await inquirer.prompt([
    {
      name: "action",
      message: "Please select an option",
      type: "list",
      choices: [
        "Fast Cash",
        "Withdraw Amount",
        "Check Balance",
        "Account Information",
      ],
    },
  ]);

  if (actionAns.action === "Fast Cash") {
    let fixAmountAns = await inquirer.prompt([
      {
        name: "fixAmount",
        message: "Please select an amount",
        type: "list",
        choices: ["1000", "2000", "5000", "10000"],
      },
    ]);

    if (fixAmountAns.fixAmount === "1000") {
      console.log(
        `$1000 Withdraw successfully, Your remaining balance is: $${(myBalance -=
          fixAmountAns.fixAmount)}`
      );
    } else if (fixAmountAns.fixAmount === "2000") {
      console.log(
        `$2000 Withdraw successfully, Your remaining balance is: $${(myBalance -=
          fixAmountAns.fixAmount)}`
      );
    } else if (fixAmountAns.fixAmount === "5000") {
      console.log(
        `$5000 Withdraw successfully, Your remaining balance is: $${(myBalance -=
          fixAmountAns.fixAmount)}`
      );
    } else if (fixAmountAns.fixAmount === "10000") {
      console.log(
        `$10000 Withdraw successfully, Your remaining balance is: $${(myBalance -=
          fixAmountAns.fixAmount)}`
      );
    }
  } else if (actionAns.action === "Withdraw Amount") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Please enter an amount",
        type: "number",
      },
    ]);

    if (amountAns.amount > myBalance) {
      console.log(`You do not have sufficient balance`);
    } else {
      myBalance -= amountAns.amount;
      console.log(
        `Withdraw successfuly, Your remaining balance is: $${myBalance}`
      );
    }
  } else if (actionAns.action === "Check Balance") {
    console.log(`Your current balance is: $${myBalance}`);
  } else if (actionAns.action === "Account Information") {
    console.log(`
    Account Title: Developer
    Account Number: 123456789
    Curreny: US Dollar
    Bank Name: ABC Bank
    Branch Code: 9999`);
  }
} else {
  console.log(`Enter valid pin number`);
}
