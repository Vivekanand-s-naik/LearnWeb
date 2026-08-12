import mongoose from "mongoose";

const {Schema} = mongoose;

const patientSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    diagnosedWith:{
        type: String,
        required: true
    },
    address: {
        type: String, 
        required: true
    },
    age: {
        type: Number,
        required: true,
        min:[0, "Age Cannot Be Negative, Got {VALUE}"]
    },
    blood: {
        type: String,
        required: true
    }, 
    gender: {
        type: String,
        required: true,
        enum:{
            values: ['MALE', 'FEMALE'],
            message: '{VALUE} Is Not Valid'
        }
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department",
        required: true,
    }
},{timestamps: true});

export const Patient = mongoose.model("Patient", patientSchema);