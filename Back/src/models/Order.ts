export class Order{
    constructor(
       public id :string,
       public order_date :string,
       public delivery_date :string,
       public qty :number,
       public fk_client :string,
       public fk_product:string 
    ){}
}

export class OrderProductDTO{
    constructor(
       public id :string,
       public qty :number 
    ){}
}

export class OrderCreateInputDTO{
    constructor(
       public deliveryDate :string,
       public fkClient :string,
       public productList:OrderProductDTO[] 
    ){}
}