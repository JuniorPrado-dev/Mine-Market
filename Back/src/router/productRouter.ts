import express from 'express';
import { ProductController } from '../controllar/ProductController';

const productControler=new ProductController();

export const productRouter=express.Router();

productRouter.get("/all-products",productControler.getAllProduct);
productRouter.get("/all-stocks",productControler.getStock);
