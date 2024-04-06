import mongoose from 'mongoose';

const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    serialNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    imageUrl: {
      type: String,
      default: '',
    },
    warrantyStartDate: {
      type: Date,
      required: true,
    },
    warrantyEndDate: {
      type: Date,
      required: true,
    },
    status: {
      type: Number,
      required: true,
      enum: [0, 1],
      default: 0,
    },
    priceUSD: {
      type: Number,
      required: true,
    },
    priceUAH: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
      trim: true,
    },
    incomeTitle: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true },
);

const Product = mongoose.model('Product', ProductSchema);

export default Product;
