"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clientRouter_1 = require("./router/clientRouter");
const app_1 = require("./app");
const productRouter_1 = require("./router/productRouter");
const orderRouter_1 = require("./router/orderRouter");
app_1.app.get("/", (req, resp) => {
    resp.send("API Mine Markert ok!");
});
app_1.app.use("/client", clientRouter_1.clientRouter);
app_1.app.use("/product", productRouter_1.productRouter);
app_1.app.use("/order", orderRouter_1.orderRouter);
