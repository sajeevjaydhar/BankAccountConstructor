function BankAccount(accountNumber, balance) {
  this.accountNumber = accountNumber;
  this.balance = balance;

  this.deposit = function (amount) {
    if (amount > 0) {
      this.balance += balance;
      console.log('Deposit Successful. New Balance:', this.balance);
    } else {
      console.log('Invalid Deposit Amount');
    }
  };

  this.withdraw = function (amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log('Withdraw is Successful. Curent Balance', this.balance);
    } else {
      console.log('Insufficient balance or invalid Withdrwal amount.');
    }
  };

  this.checkBalance = function () {
    console.log('Current Blance is:', this.balance);
  };
}
const account1 = new BankAccount(734324562543, 1000);
account1.checkBalance();
account1.deposit(1000);
account1.checkBalance();
account1.withdraw(500);
account1.checkBalance();
