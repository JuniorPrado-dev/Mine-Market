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
exports.ClientBusiness = void 0;
const ClientDataBase_1 = require("../data/ClientDataBase");
const ClientEror_1 = require("../error/ClientEror");
const CustomError_1 = require("../error/CustomError");
const Client_1 = require("../models/Client");
const idGenerator_1 = require("../services/idGenerator");
class ClientBusiness {
    constructor() {
        this.clientDataBase = new ClientDataBase_1.ClientDatabase();
        //cria client
        this.createClient = (input) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!input.getName()) {
                    throw new ClientEror_1.InvalidName();
                }
                const id = idGenerator_1.IdGenerator.generateId();
                const client = new Client_1.Client(input.getName(), id);
                yield this.clientDataBase.createClient(client);
            }
            catch (error) {
                throw new CustomError_1.CustomError(error.status, error.message);
            }
        });
        //retorna todos os clients
        this.getAllClient = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const clients = yield this.clientDataBase.getAllClient();
                return (clients);
            }
            catch (error) {
                throw new CustomError_1.CustomError(error.status, error.message);
            }
        });
    }
}
exports.ClientBusiness = ClientBusiness;
