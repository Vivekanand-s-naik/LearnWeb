import mongoose, { Schema } from "mongoose";
import { User } from "./user.model";

const videoSchema = new Schema({
    videoFile = {
        type: String,
        required: true
    },

    thumbnail = {
        type: String,
        required: true
    },

    owner = {
        type: Schema.Types.ObjectId,
        reference: "User"
    },

    title= {
        type: String,
        required: true
    },

    description = {
        type: String,
    },

    duration = {
        type: Number,
        required: true
    },

    views = {
        type: Number,
        required: true,
        default: 0
    },

    isPublished = {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

export const Video = mongoose.model("Video", videoSchema);