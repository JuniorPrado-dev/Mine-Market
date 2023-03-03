"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = exports.ClientCreateInputDTO = void 0;
class ClientCreateInputDTO {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
exports.ClientCreateInputDTO = ClientCreateInputDTO;
class Client {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
}
exports.Client = Client;
