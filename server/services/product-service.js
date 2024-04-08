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

  async getAll(params) {
    try {
      const { productType, productStatus } = params;

      const query = {};

      if (productType) query.type = productType;
      if (productStatus) query.status = productStatus;

      const items = await Product.find(query).sort({
        createdAt: -1,
      });
      const count = await Product.countDocuments();

      return { items, count };
    } catch (error) {
      console.error('Error creating product:', error);
      throw error;
    }
  }

  async createProductWithOrder(productData, orderId) {
    try {
      const product = await this.create({ ...productData, order: orderId });
      await orderService.addToOrder(product, orderId);

      return product;
    } catch (error) {
      console.error('Error in creating and adding product:', error);
      throw error;
    }
  }

  async delete(id) {
    try {
      const product = await Product.findById(id);
      await orderService.removeToOrder(product);
      await Product.findByIdAndDelete(id);

      return { message: 'is good' };
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

export default new ProductService();
