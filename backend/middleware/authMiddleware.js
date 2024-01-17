import jwt from 'jsonwebtoken';
import asyncHandler from './asyncHandler.js';
import User from '../models/userModel.js';

//Protect routes
const protect = asyncHandler(async (req, res, next) => {
  let token;

  //read token from coookie
  token = req.cookies.jwt;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const userId = decoded.userId;
      req.user = await User.findOne({ _id: userId }).select('-password');
    } catch (error) {
      res.status(401);
      throw new Error('Not authorized ,token failed');
    }
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized , no token found');
  }
});

//Admin middleware

const admin = asyncHandler(async (req, res, next) => {
  // console.log(req.user);
  if (req.user && req.user.isAdmin) {
    // console.log(req.user);
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized as Admin');
  }
});

export { protect, admin };
