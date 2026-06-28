
class BankAccount {
    #balance = 0;
    // private balance = 0;  in Java
    // private field — hidden from outside

    deposit(amount) {
        if (amount > 0) {
            //this.#balance += amount;
            this.#balance = this.#balance + amount;
        }
    }

    getBalance() {
        return this.#balance;  // controlled access
    }
}

const account = new BankAccount();
account.deposit(102);
const total_balance = account.getBalance();
console.log(total_balance);

//console.log(account.balance);  // undefined  (no public field by that name)