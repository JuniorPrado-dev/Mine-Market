"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientRouter = void 0;
const ClientController_1 = require("./../controllar/ClientController");
const express_1 = __importDefault(require("express"));
const clientControler = new ClientController_1.ClientController();
exports.clientRouter = express_1.default.Router();
exports.clientRouter.post("/new-client", clientControler.createClient);
exports.clientRouter.get("/all-clients", clientControler.getAllClient);
