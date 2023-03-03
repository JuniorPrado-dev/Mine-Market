import { ProductStockDTO, ProductStockOutputDTO } from './../models/Products';
import { ProductDatabase } from "../data/ProductDataBase";
import { CustomError } from "../error/CustomError";
import { Product, ProductGetAllOutputDTO } from "../models/Products";

export class ProductBusiness {
    private productDataBase=new ProductDatabase();
   
    //retorna todos os produtos
    getAllProduct = async () => {
        
        try {
            const products:Product[]=  await this.productDataBase.getAllProduct();

            const productsOutput:ProductGetAllOutputDTO[]=products.map((p)=>{
                return new ProductGetAllOutputDTO(p.id,p.name,p.price,p.qty_stock)
            })
            return (productsOutput);
        } catch (error: any) {
            throw new CustomError(error.status,error.message);
        }
    }
    //retorna todos os stodcks
    getStock = async () => {
        
        try {
            const stock:ProductStockDTO[]=  await this.productDataBase.getStock();

            const stockOutput:ProductStockOutputDTO[]=stock.map((s)=>{
                return new ProductStockOutputDTO(s.name,s.qty_stock);
            })
            return (stockOutput);
        } catch (error: any) {
            throw new CustomError(error.status,error.message);
        }
    }
}