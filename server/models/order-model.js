import mongoose from 'mongoose';

const { Schema } = mongoose;

const OrderSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
  date: {
    type: Date,
    required: true,
  },
  amountUSD: {
    type: Number,
    default: 0,
    min: [0, 'Сумма в долларах не может быть отрицательной'],
  },
  amountUAH: {
    type: Number,
    default: 0,
    min: [0, 'Сумма в гривнах не может быть отрицательной'],
  },
});

export default mongoose.model('Order', OrderSchema);
