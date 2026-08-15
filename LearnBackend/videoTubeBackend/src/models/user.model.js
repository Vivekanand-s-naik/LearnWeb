import mongoose from "mongoose";
export const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        index: true
    },
    email: {
        type: String,
        required: [true, "Emai Is Required Field"],
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: (value) => {
                return /^[^\s@]+@[^\s@]+.[^\s@]+$/.test(value)
            },
            message: "Enter Valide Email"
        }
    },
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar: {
        type: String,
        required: true
    },
    coverimage: String,
    refreshToken: String,

    password: {
        type: String,
        required: true
    },

    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ]
}, { timestamps: true });


export const User = mongoose.model("User", userSchema)