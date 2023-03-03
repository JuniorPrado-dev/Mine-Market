"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
class CustomError extends Error {
    constructor(statusCod, message) {
        super(message);
        this.statusCod = statusCod;
        this.message = message;
    }
}
exports.CustomError = CustomError;
