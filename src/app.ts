import express from 'express';
import { container } from './container/container';
import { TYPES } from './container/types';
import { OrderController } from './controllers/OrderController';

const orderController: OrderController = container.get(TYPES.OrderController);

const app = express();
app.use(express.json());

app.post('/orders', (req, res) => orderController.processOrder(req, res));

export default app;
