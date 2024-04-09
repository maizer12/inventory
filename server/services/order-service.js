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

  async getAll(searchQuery, page = 1, limit = 10) {
    page = page > 0 ? page : 1;
    limit = limit > 0 ? limit : 10;

    let match = {};
    if (searchQuery && searchQuery.trim()) {
      match = { title: { $regex: searchQuery, $options: 'i' } };
    }

    const skip = (page - 1) * limit;

    try {
      const result = await OrderModel.aggregate([
        {
          $match: match,
        },
        {
          $sort: {
            createdAt: -1,
          },
        },
        {
          $facet: {
            items: [{ $skip: skip }, { $limit: limit }, { $addFields: { productCount: { $size: '$products' } } }],
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
