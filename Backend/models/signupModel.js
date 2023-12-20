import mongoose from "mongoose";

const vintageSignSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

export const signupModel = mongoose.model("SignupModel", vintageSignSchema);
