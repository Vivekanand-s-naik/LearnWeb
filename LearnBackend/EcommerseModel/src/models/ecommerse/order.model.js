import mongoose from "mongoose";

const { Schema } = mongoose;

const productItemSchema = new Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    quantity: {
        type: Number,
        default: 1
    }
})

const orderSchema = new Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    products: [productItemSchema],
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: {
            values:['DELIEVERED', 'PENDING', 'CANCELLED'],
            message: "{VALUE} Is Not A Valid Status"
        },
        default: "PENDING"
    }

}, { timestamps: true })