import { OrderController } from './controller/OrderController';

let orderController = new OrderController();

document
    .querySelector('.form')
    .addEventListener('submit', orderController.add.bind(orderController));