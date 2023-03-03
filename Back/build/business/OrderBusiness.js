"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderBusiness = void 0;
const OrderDataBase_1 = require("../data/OrderDataBase");
const CustomError_1 = require("../error/CustomError");
const OrderError_1 = require("../error/OrderError");
const idGenerator_1 = require("../services/idGenerator");
class OrderBusiness {
    constructor() {
        this.orderDataBase = new OrderDataBase_1.OrderDataBase();
        //cria order
        this.createOrder = (input) => __awaiter(this, void 0, void 0, function* () {
            try {
                //verifica input
                if (!input.deliveryDate) {
                    throw new OrderError_1.DeliveryDateNotFound();
                }
                if (!input.productList) {
                    throw new OrderError_1.ProductListNotFound();
                }
                if (!input.fkClient) {
                    throw new OrderError_1.IdClientNotFound();
                }
                //verificar stock
                const idsProducts = input.productList.map((product) => product.id);
                const stockProducts = yield this.orderDataBase.getStocks(idsProducts);
                for (let i = 0; i < input.productList.length; i++) {
                    if (input.productList[i].qty > stockProducts[i]) {
                        throw new OrderError_1.OrderOutOfStock();
                    }
                }
                //fazer pedido atualizar estoque
                const orderDate = new Date().toISOString().slice(0, 10);
                const orders = [];
                input.productList.forEach((product) => {
                    const id = idGenerator_1.IdGenerator.generateId();
                    const newOder = {
                        id,
                        order_date: orderDate,
                        delivery_date: input.deliveryDate,
                        qty: product.qty,
                        fk_client: input.fkClient,
                        fk_product: product.id
                    };
                    orders.push(newOder);
                });
                //inserir na tabela
                yield this.orderDataBase.createOrder(orders);
                //atualiza stock  
                yield this.orderDataBase.updateStock(input.productList, stockProducts);
            }
            catch (error) {
                throw new CustomError_1.CustomError(error.status, error.message);
            }
        });
    }
}
exports.OrderBusiness = OrderBusiness;
