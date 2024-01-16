import User from '../models/userModel.js';
import asyncHandle from '../middleware/asyncHandler.js';
import generateToken from '../utils/generateToken.js';

// @desc  Auth user & get token
// @route POST /api/users/login
//@access Public
const authUser = asyncHandle(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @desc  Register user
// @route POST /api/users/
//@access Public
const registerUser = asyncHandle(async (req, res) => {
  res.send('register user');
});

// @desc  Logout user / clear cookie
// @route POST /api/users/logout
//@access Private
const logoutUser = asyncHandle(async (req, res) => {
  res.send('logout user');
});

// @desc  Get user profile
// @route GET /api/users/profile
//@access Public
const getUserProfile = asyncHandle(async (req, res) => {
  res.send('get user profile');
});

// @desc  Update user profile
// @route PUT /api/users/profile
//@access Private
const updateUserProfile = asyncHandle(async (req, res) => {
  res.send('update user profile');
});

// @desc  Get users
// @route GET /api/users/
//@access Private/Admin
const getUsers = asyncHandle(async (req, res) => {
  res.send('get users by Admin');
});

// @desc  Get user by Id
// @route GET /api/users/:id
//@access Private/Admin
const getUserById = asyncHandle(async (req, res) => {
  res.send('get userById by Admin');
});

// @desc  Delete users
// @route DELETE /api/users/:id
//@access Private/Admin
const deleteUser = asyncHandle(async (req, res) => {
  res.send('delete user by Admin');
});

// @desc  Update user
// @route PUT /api/users/:id
//@access Private/Admin
const updateUser = asyncHandle(async (req, res) => {
  res.send('update user by Admin');
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};
