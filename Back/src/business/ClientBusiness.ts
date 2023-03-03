import { ClientDatabase } from "../data/ClientDataBase";
import { InvalidName } from "../error/ClientEror";
import { CustomError } from "../error/CustomError";
import { Client, ClientCreateInputDTO } from "../models/Client";
import { IdGenerator } from "../services/idGenerator";

export class ClientBusiness {
    private clientDataBase=new ClientDatabase();
    //cria client
    createClient = async (input: ClientCreateInputDTO) => {
        try {

            if (!input.getName()) {
                throw new InvalidName();
            }
           
            const id= IdGenerator.generateId();
            const client:Client= new Client(input.getName(),id)
            await this.clientDataBase.createClient(client);

        } catch (error: any) {
            throw new CustomError(error.status,error.message);
        }
    }
    //retorna todos os clients
    getAllClient = async () => {
        
        try {
            const clients:Client[]=  await this.clientDataBase.getAllClient();
            return (clients);
        } catch (error: any) {
            throw new CustomError(error.status,error.message);
        }
    }
}