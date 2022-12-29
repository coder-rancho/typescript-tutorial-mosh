"use strict";
/* Create class */
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    tempMethod() {
        // this.id = 123;                      // Error: Cannot assign to 'id' because it is a read-only property
    }
}
/* create object */
let account = new Account(1, "maan", 0);
account.deposit(100);
console.log(account); // Account { id: 1, owner: 'maan', balance: 100 }
console.log(typeof account); // object
console.log(account instanceof Account); // true
/* readonly property */
// can be set only inside the constructor for e.g. id
/* Optional property */
// not mandatory to initiale in constructor for e.g. nickname
/* Access Modifiers */
// 1. public (default)  2. private  3. protected
/* getters and setters */
// get balance() {...} => account.balance
console.log(account.balance);
// set balance() {...} => account.balance = 123
/* index signatures */
// dynamic property allocation
let obj = {};
// obj.prop1 = 'val1';             // Error: Property 'prop1' does not exist on type '{}'.
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = 'Naman';
seats['A2'] = 'Aman';
/* static */
class Ride {
    start() { Ride._activeRides++; }
    stop() { Ride._activeRides--; }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
console.log(Ride.activeRides); // 0
