import Product from '../models/productModel.js';
import asyncHandle from '../middleware/asyncHandler.js';

// @desc Fetch all products
// @route GET /api/products
//@access Public
const getProducts = asyncHandle(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

// @desc Fetch a product
// @route GET /api/products/:id
//@access Public
const getProductById = asyncHandle(async (req, res) => {
    const id = req.params.id;
    const product = await Product.findById({ _id: id });
    if (product) {
        return res.json(product);
    }
    res.status(404);
    throw new Error('Product not found');
});

export { getProducts, getProductById };
