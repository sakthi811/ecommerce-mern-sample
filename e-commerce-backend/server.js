import express from 'express';
import connectDB from './config/db';

const app = express();

connectDB();

app.use(cors());
app.use(express.json({ extended : false }));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));