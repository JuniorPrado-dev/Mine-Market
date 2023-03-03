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
exports.ProductController = void 0;
const ProductBusiness_1 = require("../business/ProductBusiness");
class ProductController {
    constructor() {
        this.productBusiness = new ProductBusiness_1.ProductBusiness();
        this.getAllProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield this.productBusiness.getAllProduct();
                res.status(200).send(products);
            }
            catch (error) {
                res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
            }
        });
        //pega stock
        this.getStock = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const stocks = yield this.productBusiness.getStock();
                res.status(200).send(stocks);
            }
            catch (error) {
                res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
            }
        });
    }
}
exports.ProductController = ProductController;
