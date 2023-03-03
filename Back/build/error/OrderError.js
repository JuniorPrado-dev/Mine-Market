"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderOutOfStock = exports.ProductListNotFound = exports.IdClientNotFound = exports.DeliveryDateNotFound = void 0;
const CustomError_1 = require("./CustomError");
class DeliveryDateNotFound extends CustomError_1.CustomError {
    constructor() {
        super(404, "Data de entrega não informada!");
    }
}
exports.DeliveryDateNotFound = DeliveryDateNotFound;
class IdClientNotFound extends CustomError_1.CustomError {
    constructor() {
        super(404, "Id do cliente não informado!");
    }
}
exports.IdClientNotFound = IdClientNotFound;
class ProductListNotFound extends CustomError_1.CustomError {
    constructor() {
        super(404, "Lista de clientes não informada!");
    }
}
exports.ProductListNotFound = ProductListNotFound;
class OrderOutOfStock extends CustomError_1.CustomError {
    constructor() {
        super(400, "Estoque indisponível!");
    }
}
exports.OrderOutOfStock = OrderOutOfStock;
