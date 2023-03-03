import { clientRouter } from './router/clientRouter';
import { app } from "./app";
import { productRouter } from './router/productRouter';
import { orderRouter } from './router/orderRouter';

app.use("/client",clientRouter);
app.use("/product",productRouter);
app.use("/order",orderRouter);
