// loginRouter.js
import express from 'express';
import { loginController } from '../controllers/loginController.js';
// import loginware from '../middleware/loginware.js';

const loginRouter = express.Router();


loginRouter.post('/', loginController);


// loginRouter.get('/protected-route', loginware, (req, res) => {
//   const user = req.user;
//   res.json({ message: 'Access granted to protected route', user });
// });

export default loginRouter;
