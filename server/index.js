import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import orderRoutes from './routes/order-routes.js';
import productRoutes from './routes/product-routes.js';
import upload from './utils/multer-сonfig.js';
import cors from 'cors';
import http from 'http';
import { init as initSocketService } from './services/socket-service.js';

mongoose
  .connect(process.env.MONGO_KEY)
  .then(() => console.log('db is work'))
  .catch((err) => console.log(err));

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'is work' });
});

app.use('/api/uploads', express.static('uploads'));

app.post('/api/upload', upload.single('image'), (req, res) => {
  res.json({
    url: `/uploads/${req.file.filename}`,
  });
});

app.use('/api', orderRoutes);
app.use('/api', productRoutes);

const server = http.createServer(app);

initSocketService(server);

server.listen(process.env.PORT, (rej) => {
  if (rej) return console.log(rej);
  console.log(`Server started on port ${process.env.PORT}`);
});
