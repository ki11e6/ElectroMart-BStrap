import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import paypalRoutes from './routes/paypalRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';

dotenv.config();
connectDB();

const port = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/products', productRoutes);
app.use('/api/users/', userRoutes);
app.use('/api/orders/', orderRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/config/paypal', paypalRoutes);

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
  app.use(express.static(path.join(__dirname, '/frontend/dist')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  );
} else {
  const __dirname = path.resolve();
  app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
  app.get('/', (req, res) => {
    res.send('Ecom-API is running....');
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port: ${port}`
  );
});
