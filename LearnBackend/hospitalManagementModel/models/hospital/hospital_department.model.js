import mongoose from "mongoose";

const {Schema} = mongoose;

const departmentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location1: {
        type: String,
        required: true
    },
    location2: {
        type: String,
    }
}, {timestamps: true})

export const Departemnt = mongoose.model("Department", departmentSchema);