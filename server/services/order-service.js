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

  async addToOrder(product, orderId) {
    try {
      const order = await OrderModel.findById(orderId);
      if (!order) {
        throw new Error('Order not found');
      }

      order.products.push(product._id);

      order.amountUSD += product.priceUSD;
      order.amountUAH += product.priceUAH;

      await order.save();
      return order;
    } catch (error) {
      console.error('Error adding product to order:', error);
      throw error;
    }
  }

  async getOrderWithProducts(orderId) {
    try {
      const order = await OrderModel.findById(orderId).populate('products').exec();

      if (!order) {
        throw new Error('Order not found');
      }

      return order;
    } catch (error) {
      console.error('Error retrieving order with products:', error);
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
