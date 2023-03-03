import { clientRouter } from './router/clientRouter';
import { app } from "./app";
import { productRouter } from './router/productRouter';
import { orderRouter } from './router/orderRouter';
import { Request, Response } from 'express';

app.get("/",(req:Request,resp:Response)=>{
    resp.send("API Mine Markert ok!")
})
app.use("/client",clientRouter);
app.use("/product",productRouter);
app.use("/order",orderRouter);
