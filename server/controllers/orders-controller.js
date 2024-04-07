import orderService from '../services/order-service.js';

class OrderController {
  async create(req, res) {
    try {
      const order = await orderService.create(req.body);
      res.json(order);
    } catch (err) {
      res.status(404).json({
        message: 'Failed to create order!',
      });
    }
  }

  async getAll(req, res) {
    try {
      const orders = await orderService.getAll();
      res.json(orders);
    } catch (err) {
      res.status(404).json({
        message: 'Failed to get orders!',
      });
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      const message = await orderService.delete(id);
      res.json(message);
    } catch (err) {
      res.status(404).json({
        message: 'Failed to get orders!',
      });
    }
  }

  async getAllProducts(req, res) {
    try {
      const products = await orderService.getOrderWithProducts(req.params.id);
      res.json(products);
    } catch (err) {
      res.status(404).json({
        message: 'Failed to get orders!',
      });
    }
  }
}

export default new OrderController();
