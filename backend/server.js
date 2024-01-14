import express from 'express';
import dotenv from 'dotenv';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();
connectDB();

const port = process.env.PORT || 8000;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('api server is running');
});

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
