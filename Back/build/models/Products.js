"use strict";
// export type TProduct={
//     name?:string;
//     id:number;
//     qty:number;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductStockOutputDTO = exports.ProductStockDTO = exports.ProductGetAllOutputDTO = exports.Product = void 0;
class Product {
    constructor(id, name, price, qty_stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.qty_stock = qty_stock;
    }
}
exports.Product = Product;
class ProductGetAllOutputDTO {
    constructor(id, name, price, qtyStock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.qtyStock = qtyStock;
    }
}
exports.ProductGetAllOutputDTO = ProductGetAllOutputDTO;
class ProductStockDTO {
    constructor(name, qty_stock) {
        this.name = name;
        this.qty_stock = qty_stock;
    }
}
exports.ProductStockDTO = ProductStockDTO;
class ProductStockOutputDTO {
    constructor(name, qtyStock) {
        this.name = name;
        this.qtyStock = qtyStock;
    }
}
exports.ProductStockOutputDTO = ProductStockOutputDTO;
