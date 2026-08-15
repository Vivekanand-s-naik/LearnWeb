import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt";


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

//Before Dumping the actual password encrypt it using bcrypt library
userSchema.pre("save", async function(next){
    if (this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10);
    }
    return next();
})

//to compare the password with the encoded password
userSchema.methods.isCorrectPassword = async function(){
    return await bcrypt.compare(password, this.password);
};

export const User = mongoose.model("User", userSchema);