import Product from '../models/product-model.js';
import { getFilePath } from '../utils/file-utils.js';
import orderService from './order-service.js';
import { promises as fsPromises } from 'fs';

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
      const { productType, productStatus, search } = params;

      const query = {};

      if (search) query.name = search;
      if (productType) query.type = productType;
      if (productStatus) query.status = productStatus;

      const items = await Product.find(query).sort({
        createdAt: -1,
      });
      const count = await Product.countDocuments(query);

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
    let product;
    try {
      product = await Product.findById(id);
      if (!product) {
        return { message: 'Product not found' };
      }
    } catch (err) {
      console.error(`Error finding product with id ${id}:`, err);
      throw new Error('Error finding product');
    }

    const { imageUrl } = product;
    const filePath = getFilePath(imageUrl);

    try {
      await orderService.removeToOrder(product);
      await Product.findByIdAndDelete(id);
    } catch (err) {
      console.error(`Error removing product with id ${id} or updating orders:`, err);
      throw new Error('Error removing product or updating orders');
    }

    try {
      await fsPromises.unlink(filePath);
    } catch (err) {
      console.error(`Error deleting file at path ${filePath}:`, err);
    }

    return { message: 'Product deleted successfully' };
  }
}

export default new ProductService();
