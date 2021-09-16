const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const createProduct = async (req, res) => {
  const { name, imageUrl, description, price, countInStock } = req.body;
  const newProduct = new Product({
    name,
    imageUrl,
    description,
    price,
    countInStock,
  });
  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
const login = async (req, res) => {
  res.json({ jwt: 1 });
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  login,
};
