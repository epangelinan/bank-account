function BankAccount (name, balance) {
  this.name = name;
  this.balance = balance;
}

BankAccount.prototype.currentBalance = function(amount){
  $("#balance").text(amount);
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




$(document).ready(function() {
  //alert("ready function")
  $("form#register").submit(function() {
    event.preventDefault();
    var inputtedName = $("#inputName").val();
    var inputtedInitialDeposit = parseInt($("#inputInitialDeposit").val());
    //alert("register submit");
    //alert(inputtedName);
    //alert(inputtedInitialDeposit);
    newBankAccount = new BankAccount(inputtedName, inputtedInitialDeposit);
    console.log(newBankAccount);
    newBankAccount.currentBalance(inputtedInitialDeposit);
    return newBankAccount;
  });
  $("form#depositOrWithdraw").submit(function() {
    event.preventDefault();
    //alert("Deposit/Withdraw submit");
    var inputtedDeposit = parseInt($("#inputDeposit").val());
    var inputtedWithdrawal = parseInt($("#inputWithdrawal").val());

    if ((inputtedDeposit > 0) && (inputtedWithdrawal === NaN)) {
      newBankAccount.currentBalance(newBankAccount.deposit(inputtedDeposit));
    }

    if ((inputtedDeposit === NaN) && (inputtedWithdrawal > 0)) {
      newBankAccount.currentBalance(newBankAccount.withdraw(inputtedWithdrawal));
    }

    if ((inputtedDeposit > 0) && (inputtedWithdrawal > 0)) {
      newBankAccount.currentBalance(newBankAccount.deposit(inputtedDeposit));
      newBankAccount.currentBalance(newBankAccount.withdraw(inputtedWithdrawal));
    }

  });
});
// newBankAccount.deposit(200);
// console.log(newBankAccount.balance);
//
// newBankAccount.withdraw(100);
// console.log(newBankAccount.balance);
