import OrderModel from '../models/order-model.js';

class OrderService {
  async create(orderData) {
    try {
      const order = new OrderModel(orderData);
      await order.save();
      return order;
    } catch (error) {
      console.error('Error creating order:', error);
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

export default new OrderService();
