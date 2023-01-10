"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stock_1 = require("./endpoints/stock");
const createOrder_1 = require("./endpoints/createOrder");
const allProducts_1 = require("./endpoints/allProducts");
const allClients_1 = require("./endpoints/allClients");
const createClient_1 = require("./endpoints/createClient");
const ping_1 = require("./endpoints/ping");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});
app.get("/ping", ping_1.ping);
//retorna dados dos clientes
app.get("/clients", allClients_1.getAllClients);
//retorna dados dos produtos
app.get("/products", allProducts_1.getAllProducts);
//retorna estoque
app.get("/stock", stock_1.getStock);
//retorna dados dos produtos
app.post("/order", createOrder_1.createOrder);
//add client
app.post("/client", createClient_1.createClient);
