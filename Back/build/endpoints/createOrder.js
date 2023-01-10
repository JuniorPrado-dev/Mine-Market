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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = void 0;
const connections_1 = __importDefault(require("../database/connections"));
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let errorCode = 400;
    try {
        //dados do request
        const delivery_date = req.body.delivery_date;
        const fk_client = req.body.fk_client;
        const products = req.body.products;
        if (!delivery_date || !products || !fk_client) {
            throw new Error("Body invalido!");
        }
        //verificar stock
        yield products.forEach((product) => __awaiter(void 0, void 0, void 0, function* () {
            //get stock
            const getStock = yield connections_1.default.select("qty_stock")
                .from("Case_Products")
                .where({ id: product.id });
            const stockAtual = Number(getStock[0].qty_stock);
            if (stockAtual < product.qty) {
                throw new Error("Estoque indisponível!");
            }
        }));
        //fazer pedido atualizar estoque
        yield products.forEach((product) => __awaiter(void 0, void 0, void 0, function* () {
            //adicionba registro
            yield (0, connections_1.default)("Case_Orders").insert({
                order_date: new Date().toISOString().slice(0, 10),
                delivery_date,
                qty: product.qty,
                fk_client,
                fk_product: product.id
            });
            //get stock
            const getStock = yield connections_1.default.select("qty_stock")
                .from("Case_Products")
                .where({ id: product.id });
            const stockAtual = Number(getStock[0].qty_stock);
            //atualizar stock
            yield (0, connections_1.default)("Case_Products")
                .where({ id: product.id })
                .update({ qty_stock: stockAtual - product.qty });
        }));
        res.status(200).send("Pedido criado com sucesso!!");
    }
    catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
});
exports.createOrder = createOrder;
