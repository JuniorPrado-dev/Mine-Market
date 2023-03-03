import { Order, OrderCreateInputDTO } from './../models/Order';
import { OrderDataBase } from "../data/OrderDataBase";
import { CustomError } from '../error/CustomError';
import { DeliveryDateNotFound, IdClientNotFound, OrderOutOfStock, ProductListNotFound } from '../error/OrderError';
import { IdGenerator } from '../services/idGenerator';

export class OrderBusiness {
    private orderDataBase = new OrderDataBase();

    //cria order
    createOrder = async (input: OrderCreateInputDTO) => {
        try {
            //verifica input
            if (!input.deliveryDate) {
                throw new DeliveryDateNotFound();
            }
            if (!input.productList) {
                throw new ProductListNotFound();
            }
            if (!input.fkClient) {
                throw new IdClientNotFound();
            }

            //verificar stock
            const idsProducts = input.productList.map((product) => product.id);
            const stockProducts = await this.orderDataBase.getStocks(idsProducts);
            for (let i = 0; i < input.productList.length; i++) {
                if (input.productList[i].qty > stockProducts[i]) {
                    throw new OrderOutOfStock();
                }
            }

            //fazer pedido atualizar estoque
            const orderDate = new Date().toISOString().slice(0, 10);
            const orders: Order[] = []
            input.productList.forEach((product) => {
                const id = IdGenerator.generateId();
                const newOder = {
                    id,
                    order_date: orderDate,
                    delivery_date: input.deliveryDate,
                    qty: product.qty,
                    fk_client: input.fkClient,
                    fk_product: product.id
                }
                orders.push(newOder)
            })
            //inserir na tabela
           await this.orderDataBase.createOrder(orders)
            //atualiza stock  
           await this.orderDataBase.updateStock(input.productList,stockProducts)

    }catch(error: any) {
        throw new CustomError(error.status, error.message);
    }
}
}