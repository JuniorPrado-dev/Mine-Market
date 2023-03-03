import { CustomError } from "../error/CustomError";
import { Order, OrderProductDTO } from "../models/Order";
import { BaseDataBase } from "./BaseDataBase";

export class OrderDataBase extends BaseDataBase{
    private orderTable="Case_Orders";
    private productTable="Case_Products";
    //retornar stocks
    async getStocks(idsProducts: string[]) {
        try {
            const queryStockProducts = await OrderDataBase.connection.select('qty_stock').from(this.productTable)
                .whereIn('id', idsProducts);
            const stockProducts = queryStockProducts.map((stock)=>Number(stock.qty_stock));
            return stockProducts;
        }catch(err:any){
            throw new CustomError(err.status,err.message);
        }
    }
    //retornar stocks
    async createOrder(order: Order|Order[]) {
        try {
            await OrderDataBase.connection(this.orderTable).insert(order);
        }catch(err:any){
            throw new CustomError(err.status,err.message);
        }
    }
    //atualizar stock
    async updateStock(productList:OrderProductDTO[],currentStocks:number[]) {
        try {
            for (let i=0;i<productList.length;i++){
                await OrderDataBase.connection(this.productTable)
                .where({ id: productList[i].id })
                .update({ qty_stock: currentStocks[i] - productList[i].qty })
            } 
        }catch(err:any){
            throw new CustomError(err.status,err.message);
        }
    }
}