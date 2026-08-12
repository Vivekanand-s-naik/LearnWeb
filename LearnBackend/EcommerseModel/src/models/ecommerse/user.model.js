import mongoose from "mongoose";
const {Schema} = mongoose;

const userSchema = new Schema({
    userName:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phoneNumber:{
        type: Number,
        required: true,
        unique: true
    },
    gender:{
        type: String,
        requires: true,
        enum:{
            values:['MALE', 'FEMALE'],
            message:"{VALUE} is not supportted"
        }
    },
    password: {
        type: String,
        required: true,
        maxlength: [20, "Password Must Not Exceed 20 Characters"],
        minlength: [8, "Password Must Be Atleast 8 Characters"]
    }
}, {timestamps: true});

export const User = mongoose.model("User", userSchema);