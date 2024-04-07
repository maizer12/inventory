import productService from '../services/product-service.js';

class ProductController {
  async createProductWithOrder(req, res) {
    try {
      const id = req.params.orderId;
      const product = await productService.createProductWithOrder(req.body, id);

      res.json(product);
    } catch (err) {
      res.status(404).json({
        message: 'Failed to create product!',
      });
    }
  }
  async getAll(req, res) {
    try {
      const products = await productService.getAll();
      res.json(products);
    } catch (err) {
      res.status(404).json({
        message: 'Failed to get products!',
      });
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      const message = await productService.delete(id);
      res.json(message);
    } catch (err) {
      res.status(404).json({
        message: 'Failed to get orders!',
      });
    }
  }
}

export default new ProductController();
