"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateInputDTO = exports.OrderProductDTO = exports.Order = void 0;
class Order {
    constructor(id, order_date, delivery_date, qty, fk_client, fk_product) {
        this.id = id;
        this.order_date = order_date;
        this.delivery_date = delivery_date;
        this.qty = qty;
        this.fk_client = fk_client;
        this.fk_product = fk_product;
    }
}
exports.Order = Order;
class OrderProductDTO {
    constructor(id, qty) {
        this.id = id;
        this.qty = qty;
    }
}
exports.OrderProductDTO = OrderProductDTO;
class OrderCreateInputDTO {
    constructor(deliveryDate, fkClient, productList) {
        this.deliveryDate = deliveryDate;
        this.fkClient = fkClient;
        this.productList = productList;
    }
}
exports.OrderCreateInputDTO = OrderCreateInputDTO;
