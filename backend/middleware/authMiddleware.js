import jwt from 'jsonwebtoken';
import asyncHandle from './asyncHandler';
import User from '../models/userModel';

//Protect routes
const protect = asyncHandle(async (req, res, next) => {
  let token;

  //read token from coookie
  token = req.cookies.jwt;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const userId = decoded.userId;
      req.user = await User.findOne({ userId }).select('-password');
      next();
    } catch (error) {
      res.status(401);
      throw new Error('Not authorized ,token failed');
    }
  } else {
    res.status(401);
    throw new Error('Not authorized , no token found');
  }
});

//Admin middleware

const admin = asyncHandle(async (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized as Admin');
  }
});

export { protect, admin };
