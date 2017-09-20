import { Order } from '../model/Order';
import { OrderList } from '../model/OrderList';
import { OrderListView } from '../view/OrderListView';
import { Message } from '../model/Message';
import { MessageView } from '../view/MessageView';

export class OrderController {

    constructor() {

        this._inputDate = document.querySelector('#date');
        this._inputAmount = document.querySelector('#amount');
        this._inputPrice = document.querySelector('#price');

        this._orderList = new OrderList();
        this._orderListView = new OrderListView('#orderListView');
        this._orderListView.update(this._orderList);

        this._message = new Message();
        this._messageView = new MessageView('#messageView');
        this._messageView.update(this._message);
    }

    add(event) {

        event.preventDefault();
        
        let order = new Order(
            this._inputDate.value,
            this._inputAmount.value,
            this._inputPrice.value
        );
        this._orderList.add(order); 
        this._orderListView.update(this._orderList);    

        this._message.text = 'Order added.';
        this._messageView.update(this._message);
    }
}