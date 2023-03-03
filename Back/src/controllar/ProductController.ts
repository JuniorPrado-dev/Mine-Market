import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { ProductGetAllOutputDTO, ProductStockOutputDTO } from "../models/Products";

export class ProductController{
    private productBusiness=new ProductBusiness();    
    getAllProduct =async (req: Request, res: Response) => {
        try{
            const products:ProductGetAllOutputDTO[]=await this.productBusiness.getAllProduct();
            res.status(200).send(products)
        }catch(error:any){
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    };
    //pega stock
    getStock =async (req: Request, res: Response) => {
        try{
            const stocks:ProductStockOutputDTO[]=await this.productBusiness.getStock();
            res.status(200).send(stocks)
        }catch(error:any){
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    };
}