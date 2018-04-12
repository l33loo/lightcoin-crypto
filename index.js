class Account {
  constructor(username) {
    this.username = username;
    this.balance = 0;
  }
}

class Transaction {
  constructor(account, amount) {
    this.account = account;
    this.amount = amount;
  }
}
class Withdrawal extends Transaction {

  commit() {
    this.account.balance -= this.amount;
  }
}

class Deposit extends Transaction {

  commit() {
    this.account.balance += this.amount;
  }
}


// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("snow-patrol");
t1 = new Withdrawal(myAccount, 50.25);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(myAccount, 9.99);
t2.commit();
console.log('Transaction 2:', t2);
t3 = new Deposit(myAccount, 134.56);
t3.commit();
console.log("Transaction 3: ", t3);

console.log('Balance:', myAccount.balance);
