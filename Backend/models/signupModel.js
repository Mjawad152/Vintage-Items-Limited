import mongoose from "mongoose";

const vintageSignSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true, 
    },
    password: String,
});

export const signupModel = mongoose.model("SignupModel", vintageSignSchema);
