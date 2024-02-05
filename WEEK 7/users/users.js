//? Create a file with the User class, including the constructor and makeDeposit methods:

class User {
  constructor(userName, email) {
    this.userName = userName;
    this.email = email;
    this.accountBalance = 0;
  }
  makeDeposit(amount) {
    this.accountBalance += amount
  }
//? Add a makeWithdrawal method to the User class
  makeWithdrawal(amount) {
    this.accountBalance -= amount
  }
//? Add a displayBalance method to the User class
  displayBalance() {
    console.log(this.accountBalance)
  }
//? Transfer Money method bonus
  transferMoney(amount, recipient) {
    this.accountBalance -= amount;
    recipient.accountBalance += amount;
  }
}

//? Create 3 instances of the User class
const Omar = new User("Omar", "omarmani2016@gmail.com")
const kader = new User ("kader", "kader@aol.com")
const wael = new User ("wael", "wael@yahoo.com")

//? Have the first user make 3 deposits and 1 withdrawal and then display their balance
Omar.makeDeposit(100);
Omar.makeDeposit(150);
Omar.makeDeposit(50);
Omar.makeWithdrawal(100);
Omar.displayBalance();

//? Have the second user make 2 deposits and 2 withdrawals and then display their balance
kader.makeDeposit(400);
kader.makeDeposit(200);
kader.makeWithdrawal(300);
kader.makeWithdrawal(50);
kader.displayBalance();

//? Have the third user make 1 deposit and 3 withdrawals and then display their balance
wael.makeDeposit(500);
wael.makeWithdrawal(50);
wael.makeWithdrawal(100);
wael.makeWithdrawal(10);
wael.displayBalance();

//! BONUS: Add a transferMoney method; have the first user transfer money to the third user and then print both users' balances
Omar.displayBalance();
kader.displayBalance();
Omar.transferMoney(100, kader)
Omar.displayBalance();
kader.displayBalance();
