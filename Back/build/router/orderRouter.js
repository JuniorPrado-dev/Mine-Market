"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = __importDefault(require("express"));
const OrderController_1 = require("../controllar/OrderController");
const orderControler = new OrderController_1.OrderController();
exports.orderRouter = express_1.default.Router();
exports.orderRouter.post("/new-order", orderControler.createOrder);
