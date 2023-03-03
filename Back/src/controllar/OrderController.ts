import { Request, Response } from "express";
import { OrderBusiness } from "../business/OrderBusiness";
import { OrderCreateInputDTO } from "../models/Order";

export class OrderController{
    private orderBusiness=new OrderBusiness();

    createOrder =async (req: Request, res: Response) => {
        try{
            const input:OrderCreateInputDTO={
                deliveryDate:req.body.deliveryDate,
                fkClient:req.body.fkClient,
                productList:req.body.productList
            }
           await this.orderBusiness.createOrder(input);

            res.status(200).send("Pedido realizado com sucesso!")
        }catch(error:any){
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    };
}