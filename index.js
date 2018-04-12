class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
  }
}

class Transaction {
  constructor(account, amount) {
    this.account = account;
    this.amount = amount;
  }

  commit() {
    this.account.balance += this.value;
  }
}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
}

class Withdrawal extends Transaction {
  get value() {
    return this.amount;
  }
}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("snow-patrol");
t1 = new Withdrawal(myAccount, 50.25);
t1.commit();
console.log('Transaction 1:', t1.value);

t2 = new Withdrawal(myAccount, 9.99);
t2.commit;
console.log('Transaction 2:', t2.value);
t3 = new Deposit(myAccount, 134.56);
t3.commit;
console.log("Transaction 3: ", t3.value);

console.log('Balance:', myAccount.balance);
