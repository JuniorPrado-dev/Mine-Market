import { ClientController } from './../controllar/ClientController';
import express from 'express';

const clientControler=new ClientController();

export const clientRouter=express.Router();

clientRouter.post("/new-client",clientControler.createClient)
clientRouter.get("/all-clients",clientControler.getAllClient)