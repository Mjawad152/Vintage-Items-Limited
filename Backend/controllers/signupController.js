// signupController.js
import { signupModel } from "../models/signupModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();
const saltRounds = 10;

const secretKey = process.env.SECRET_KEY || "5512";


export const signupController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const signup = new signupModel({
      name,
      email,
      password: hashedPassword,
    });

// const data=req.body;
// console.log("data in signup controller"+ data)


    await signup.save();

   
    const token = jwt.sign({ userId: signup._id, email: signup.email }, secretKey, { expiresIn: '1h' });
    console.log("token in signnup controller "+token)
    res.status(201).json({ message: 'Signup successful', token });
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
      return res.status(400).json({ error: 'Email already exists. Please use a different email.' });
    }

    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
