//define 
//Abstraction hides the complexity of the implementation and shows only the necessary details.
// While JavaScript does not provide built-in access control like private or protected,
// this can be simulated using closures or the # symbol for private fields.

class BankAccount {
    #balance;  // Private field
    
    constructor(initialBalance) {
      this.#balance = initialBalance;
    }
    
    deposit(amount) {
      this.#balance += amount;
    }
    
    getBalance() {
      return this.#balance;
    }
  }
  
  let account = new BankAccount(100);
  account.deposit(50);
  console.log(account.getBalance()); 