import express from 'express';

const { getProducts, getProductById } = require('../controllers/productController');
const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);

module.exports = router;