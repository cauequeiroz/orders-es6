export class Order {

    constructor(date, amount, price) {

        this._date = date;
        this._amount = amount;
        this._price = price;
    }

    get date() {

        return this._date;
    }

    get amount() {

        return this._amount;
    }

    get price() {
        
        return this._price;
    }

    get total() {

        return this._amount * this._price;
    }
}