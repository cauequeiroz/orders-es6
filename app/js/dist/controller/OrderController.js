'use strict';

System.register(['../model/Order', '../model/OrderList', '../view/OrderListView', '../model/Message', '../view/MessageView'], function (_export, _context) {
    "use strict";

    var Order, OrderList, OrderListView, Message, MessageView, _createClass, OrderController;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_modelOrder) {
            Order = _modelOrder.Order;
        }, function (_modelOrderList) {
            OrderList = _modelOrderList.OrderList;
        }, function (_viewOrderListView) {
            OrderListView = _viewOrderListView.OrderListView;
        }, function (_modelMessage) {
            Message = _modelMessage.Message;
        }, function (_viewMessageView) {
            MessageView = _viewMessageView.MessageView;
        }],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _export('OrderController', OrderController = function () {
                function OrderController() {
                    _classCallCheck(this, OrderController);

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

                _createClass(OrderController, [{
                    key: 'add',
                    value: function add(event) {

                        event.preventDefault();

                        var order = new Order(this._inputDate.value, this._inputAmount.value, this._inputPrice.value);
                        this._orderList.add(order);
                        this._orderListView.update(this._orderList);

                        this._message.text = 'Order added.';
                        this._messageView.update(this._message);
                    }
                }]);

                return OrderController;
            }());

            _export('OrderController', OrderController);
        }
    };
});
//# sourceMappingURL=OrderController.js.map