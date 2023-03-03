import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

export const app = express();

app.use(express.json());
app.use(cors());
const port=process.env||3003;

app.listen(port,() => {
    console.log(`Servidor rodando na porta ${port}` );
    
})