import  express  from "express";
import { signupController } from "../controllers/signupController.js";

const signupRouter = express.Router();

signupRouter.post('/', signupController);

export default signupRouter;
