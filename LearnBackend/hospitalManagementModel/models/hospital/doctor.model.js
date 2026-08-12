import mongoose from "mongoose";

const {Schema} = mongoose;

const departmentUnitSchema = new Schema({
    departmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department",
        required: true
    },
    numberOfWorkingHours: {
        type: String,
        required: true
    }
})

const doctorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        unique: true,
        required: true
    },
    department: [departmentUnitSchema],
    qualification: {
        type: String,
        required: true
    }
}, {timestamps: true});

export const Doctor = mongoose.model("Doctor", doctorSchema);