import mongoose from "mongoose";
const {Schema} = mongoose;

const categorySchema = new Schema({
    name:{
        type: String,
        required: true,
        enum: {
            values: ['ELECTRONICS', "FASHION", "FOOTWEAR", "DECEROATIVES", "OTHER"],
            message: '{VALUE} Is Not Supported'
        }
    }
}, {timestamps=true})

export const Category = mongoose.model("Category", categorySchema);