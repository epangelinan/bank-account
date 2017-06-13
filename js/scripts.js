function BankAccount (name, balance) {
  this.name = name;
  this.balance = balance;
}


BankAccount.prototype.deposit = function (depositAmount) {
  this.balance += depositAmount;
  return this.balance;
}

BankAccount.prototype.withdraw = function (withdrawalAmount) {
  this.balance -= withdrawalAmount;
  return this.balance;
}

// get name and initial deposit
var name = $("#inputName").val();
var initialDeposit = $("#inputInitialDeposit").val();

var newBankAccount = new BankAccount(name, initialDeposit);
console.log(newBankAccount);
//
// newBankAccount.deposit(200);
// console.log(newBankAccount.balance);
//
// newBankAccount.withdraw(100);
// console.log(newBankAccount.balance);
