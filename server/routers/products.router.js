import { Router } from 'express';
import { createProduct } from '../controllers/products.Controller.js';
import upload from '../middlewares/multerConfig.js';

export const productRouter = Router();
productRouter.post('/', upload.single('image'), createProduct);