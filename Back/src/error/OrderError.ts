import { CustomError } from "./CustomError";

export class DeliveryDateNotFound extends CustomError{
    constructor(){
        super(404,"Data de entrega não informada!")
    }
} 
export class IdClientNotFound extends CustomError{
    constructor(){
        super(404,"Id do cliente não informado!")
    }
} 
export class ProductListNotFound extends CustomError{
    constructor(){
        super(404,"Lista de clientes não informada!")
    }
} 
export class OrderOutOfStock extends CustomError{
    constructor(){
        super(400,"Estoque indisponível!")
    }
} 
