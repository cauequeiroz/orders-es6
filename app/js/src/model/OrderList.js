export class OrderList {

    constructor() {

        this._list = [];
    }

    get list() {

        return this._list;
    }

    get total() {

        return this._list.reduce((total, current) => total + current.total, 0);
    }

    add(order) {

        this._list.push(order);
    }
}