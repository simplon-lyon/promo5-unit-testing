

class Account {
    constructor() {
        this.calculus = new Calculus();
        this.balance = 100;
    }

    deposit(money) {
        this.balance = this.calculus.operation(this.balance, money, '+');
    }

    withdraw(money) {
        if(this.balance > money) {
            this.balance = this.calculus.operation(this.balance, money, '-');
        } else {
            throw new Error('not enough cash');
        }
    }


}