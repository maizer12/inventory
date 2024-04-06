import express from 'express';
import ordersController from '../controllers/orders-controller.js';

//import { checkAuth } from '../utils/checkAuth.js';

const router = express.Router();

router.get('/orders', ordersController.getAll);
router.get('/order/:id', ordersController.getAllProducts);
router.post('/orders', ordersController.create);

export default router;
