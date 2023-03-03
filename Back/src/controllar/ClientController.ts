import { Request, Response } from "express";
import { ClientBusiness } from "../business/ClientBusiness";
import { Client, ClientCreateInputDTO } from "../models/Client";

export class ClientController{
    private clientBusiness=new ClientBusiness();

    createClient =async (req: Request, res: Response) => {
        try{
            const name=req.body.name
            const input=new ClientCreateInputDTO(name)
            await this.clientBusiness.createClient(input)
            res.status(200).send("Cliente Cadastrado com sucesso!")
        }catch(error:any){
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    };
    getAllClient =async (req: Request, res: Response) => {
        try{
            const clients:Client[]=await this.clientBusiness.getAllClient();
            res.status(200).send(clients)
        }catch(error:any){
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    };
}