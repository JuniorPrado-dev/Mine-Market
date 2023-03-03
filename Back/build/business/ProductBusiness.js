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
exports.ProductBusiness = void 0;
const Products_1 = require("./../models/Products");
const ProductDataBase_1 = require("../data/ProductDataBase");
const CustomError_1 = require("../error/CustomError");
const Products_2 = require("../models/Products");
class ProductBusiness {
    constructor() {
        this.productDataBase = new ProductDataBase_1.ProductDatabase();
        //retorna todos os produtos
        this.getAllProduct = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield this.productDataBase.getAllProduct();
                const productsOutput = products.map((p) => {
                    return new Products_2.ProductGetAllOutputDTO(p.id, p.name, p.price, p.qty_stock);
                });
                return (productsOutput);
            }
            catch (error) {
                throw new CustomError_1.CustomError(error.status, error.message);
            }
        });
        //retorna todos os stodcks
        this.getStock = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const stock = yield this.productDataBase.getStock();
                const stockOutput = stock.map((s) => {
                    return new Products_1.ProductStockOutputDTO(s.name, s.qty_stock);
                });
                return (stockOutput);
            }
            catch (error) {
                throw new CustomError_1.CustomError(error.status, error.message);
            }
        });
    }
}
exports.ProductBusiness = ProductBusiness;
