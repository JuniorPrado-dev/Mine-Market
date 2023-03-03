"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = __importDefault(require("express"));
const ProductController_1 = require("../controllar/ProductController");
const productControler = new ProductController_1.ProductController();
exports.productRouter = express_1.default.Router();
exports.productRouter.get("/all-products", productControler.getAllProduct);
exports.productRouter.get("/all-stocks", productControler.getStock);
