import { ProductStockDTO } from './../models/Products';
import { CustomError } from "../error/CustomError";
import { Product } from "../models/Products";
import { BaseDataBase } from "./BaseDataBase";

export class ProductDatabase extends BaseDataBase {
    private clientTable="Case_Products";
    //retornal todos produtos
    async getAllProduct() {
        try {
            const clients:Product[] = await ProductDatabase.connection.select('*').from(this.clientTable);
            return clients;
        }catch(err:any){
            throw new CustomError(err.status,err.message);
        }
    }
    //retornal todos stocks
    async getStock() {
        try {
            const stocks:ProductStockDTO[] = await ProductDatabase.connection.select('name',"qty_stock").from(this.clientTable);
            return stocks;
        }catch(err:any){
            throw new CustomError(err.status,err.message);
        }
    }
}