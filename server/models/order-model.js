import mongoose from 'mongoose';

const { Schema } = mongoose;

const OrderSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    productCount: {
      type: Number,
      default: 0,
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
  },
  { timestamps: true },
);

export default mongoose.model('Order', OrderSchema);
