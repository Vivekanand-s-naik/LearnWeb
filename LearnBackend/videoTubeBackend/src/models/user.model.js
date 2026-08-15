import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
    fullName: {
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
userSchema.methods.isCorrectPassword = async function(password){
    return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            username: this.username,
            email: this.email,
            fullName: this.fullName,
        },
        process.env.ACCESS__TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
            algorithm: 'HS256'
        }
    )
};

userSchema.methods.generateRefreshToken =  function(text){
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
            algorithm: 'HS256'
        }
    )
};
export const User = mongoose.model("User", userSchema);

//Generate Random hashcode
(()=>{
    bcrypt.hash("CodersParadise", 10).then(res=>{
        console.log(res);
    });
})()