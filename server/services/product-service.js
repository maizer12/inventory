import Product from '../models/product-model.js';
import orderService from './order-service.js';

class ProductService {
  async create(productData) {
    try {
      const product = new Product(productData);
      await product.save();
      return product;
    } catch (error) {
      console.error('Error creating product:', error);
      throw error;
    }
  }

  async createProductWithOrder(productData, orderId) {
    try {
      const product = await this.create(productData);
      await orderService.addToOrder(product, orderId);

      return product;
    } catch (error) {
      console.error('Error in creating and adding product:', error);
      throw error;
    }
  }

  async getAll() {
    try {
      const orders = await OrderModel.aggregate([
        {
          $addFields: {
            productCount: { $size: '$products' },
          },
        },
      ]);
      return orders;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

export default new ProductService();
