'use strict';

System.register(['./controller/OrderController'], function (_export, _context) {
    "use strict";

    var OrderController, orderController;
    return {
        setters: [function (_controllerOrderController) {
            OrderController = _controllerOrderController.OrderController;
        }],
        execute: function () {
            orderController = new OrderController();


            document.querySelector('.form').addEventListener('submit', orderController.add.bind(orderController));
        }
    };
});
//# sourceMappingURL=app.js.map