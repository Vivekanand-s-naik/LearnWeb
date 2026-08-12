import mongoose from "mongoose";

const {Schema} = mongoose;

const productSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
        default: "OTHER"
    },
    stock:{
        type: Number,
        default: 0,
        min: [0 , "Stock cannot be negative, Got {VALUE}"]
    },
    price: {
        type : Number,
        default: 0,
        min: [0 , "Price cannot be negative, Got {VALUE}"]
    },
    image: String,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {timestamps: true});

export const Product = mongoose.model("Product", productSchema);