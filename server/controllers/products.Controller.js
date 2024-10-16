import {products} from '../db/dataBase.js'

export const createProduct = (req, res) => {
    const { name, description, price } = req.body;
    const product = {
      id: products.length + 1,
      name,
      description,
      price,
      imageUrl: req.file ? `/uploads/${req.file.filename}` : null
    };
    products.push(product);
    res.status(201).json(product);
  };