import mongoose from "mongoose";
export const {Schema} = mongoose;

const userSchema = new Schema({
    username: String,
    email: {
        type: String,
        required: [true, "Emai Is Required Field"],
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: (value)=>{
                return /^[^\s@]+@[^\s@]+.[^\s@]+$/.test(value)
            },
            message: "Enter Valide Email"
        }
    },
    fullname: String,
    avatar: String,
    coverimage: String,
    password: String,
    refreshToken: String,

    // watchHistory: {
    //     type: Schema.Types.ObjectId
    // }
}, {timestamps: true});

export const User = mongoose.model("User", userSchema)