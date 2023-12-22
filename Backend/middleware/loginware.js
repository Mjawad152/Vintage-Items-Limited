
import jwt from 'jsonwebtoken';

const secretKey = process.env.SECRET_KEY || "5512";

const loginware = (req, res, next) => {

  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized. Token not provided.' });
  }


  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized. Invalid token.' });
    }

    req.user = decoded;
    next();
  });
};

export default loginware;
