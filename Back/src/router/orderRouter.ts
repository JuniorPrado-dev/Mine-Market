import express from 'express';
import { OrderController } from '../controllar/OrderController';

const orderControler=new OrderController();

export const orderRouter=express.Router();

orderRouter.post("/new-order",orderControler.createOrder)
