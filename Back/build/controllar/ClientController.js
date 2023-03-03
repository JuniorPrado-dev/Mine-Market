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
exports.ClientController = void 0;
const ClientBusiness_1 = require("../business/ClientBusiness");
const Client_1 = require("../models/Client");
class ClientController {
    constructor() {
        this.clientBusiness = new ClientBusiness_1.ClientBusiness();
        this.createClient = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const name = req.body.name;
                const input = new Client_1.ClientCreateInputDTO(name);
                yield this.clientBusiness.createClient(input);
                res.status(200).send("Cliente Cadastrado com sucesso!");
            }
            catch (error) {
                res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
            }
        });
        this.getAllClient = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const clients = yield this.clientBusiness.getAllClient();
                res.status(200).send(clients);
            }
            catch (error) {
                res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
            }
        });
    }
}
exports.ClientController = ClientController;
