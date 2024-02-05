import Product from '../models/productModel.js';
import asyncHandler from '../middleware/asyncHandler.js';

// @desc Fetch all products
// @route GET /api/products
//@access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc Fetch a product
// @route GET /api/products/:id
//@access Public
const getProductById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById({ _id: id });
  if (product) {
    return res.json(product);
  }
  res.status(404);
  throw new Error('Product not found');
});

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    brand: 'Sample brand',
    category: 'Sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description',
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

export { getProducts, getProductById, createProduct };
