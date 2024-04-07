import express from 'express';
import productController from '../controllers/product-controller.js';

//import { checkAuth } from '../utils/checkAuth.js';

const router = express.Router();

router.get('/products', productController.getAll);
router.post('/product/order/:orderId', productController.createProductWithOrder);
router.delete('/product/:id', productController.delete);

export default router;
