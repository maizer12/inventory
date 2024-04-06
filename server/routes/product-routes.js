import express from 'express';
import productController from '../controllers/product-controller.js';

//import { checkAuth } from '../utils/checkAuth.js';

const router = express.Router();

//router.get('/orders', ordersController.getAll);
router.post('/product/order/:orderId', productController.createProductWithOrder);

export default router;
