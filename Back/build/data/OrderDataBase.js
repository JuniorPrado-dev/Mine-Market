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
exports.OrderDataBase = void 0;
const CustomError_1 = require("../error/CustomError");
const BaseDataBase_1 = require("./BaseDataBase");
class OrderDataBase extends BaseDataBase_1.BaseDataBase {
    constructor() {
        super(...arguments);
        this.orderTable = "Case_Orders";
        this.productTable = "Case_Products";
    }
    //retornar stocks
    getStocks(idsProducts) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const queryStockProducts = yield OrderDataBase.connection.select('qty_stock').from(this.productTable)
                    .whereIn('id', idsProducts);
                const stockProducts = queryStockProducts.map((stock) => Number(stock.qty_stock));
                return stockProducts;
            }
            catch (err) {
                throw new CustomError_1.CustomError(err.status, err.message);
            }
        });
    }
    //retornar stocks
    createOrder(order) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield OrderDataBase.connection(this.orderTable).insert(order);
            }
            catch (err) {
                throw new CustomError_1.CustomError(err.status, err.message);
            }
        });
    }
    //atualizar stock
    updateStock(productList, currentStocks) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                for (let i = 0; i < productList.length; i++) {
                    yield OrderDataBase.connection(this.productTable)
                        .where({ id: productList[i].id })
                        .update({ qty_stock: currentStocks[i] - productList[i].qty });
                }
            }
            catch (err) {
                throw new CustomError_1.CustomError(err.status, err.message);
            }
        });
    }
}
exports.OrderDataBase = OrderDataBase;
