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

  async removeToOrder(product) {
    try {
      const order = await OrderModel.findById(product.order);
      if (!order) {
        throw new Error('Order not found');
      }
      order.products = order.products.filter((p) => p.toString() != product._id.toString());

      order.amountUSD -= product.priceUSD;
      order.amountUAH -= product.priceUAH;

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

      return order.products;
    } catch (error) {
      console.error('Error retrieving order with products:', error);
      throw error;
    }
  }

  async getAll() {
    try {
      const result = await OrderModel.aggregate([
        {
          $sort: {
            createdAt: -1,
          },
        },
        {
          $facet: {
            items: [{ $addFields: { productCount: { $size: '$products' } } }],
            totalCount: [{ $count: 'count' }],
          },
        },
      ]);
      const { items, totalCount } = result[0];
      return { items, ...totalCount[0] };
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async delete(id) {
    try {
      const res = await OrderModel.findByIdAndDelete(id);
      return { message: 'is good' };
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

export default new OrderService();
