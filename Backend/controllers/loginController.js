import { signupModel } from "../models/signupModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import loginware from "../middleware/loginware.js";
const secretKey = "5512"; 

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    
    const user = await signupModel.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

 
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: user._id, email: user.email }, secretKey, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
    console.log("token in login" +token)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
