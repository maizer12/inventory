import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import orderRoutes from './routes/order-routes.js';
import productRoutes from './routes/product-routes.js';
import multer from 'multer';
import cors from 'cors';
import http from 'http';
import { Server as SocketIo } from 'socket.io';

mongoose
  .connect(process.env.MONGO_KEY)
  .then(() => console.log('db is work'))
  .catch((err) => console.log(err));

const app = express();

const storage = multer.diskStorage({
  destination: (_, __, cd) => {
    cd(null, 'uploads');
  },
  filename: (_, file, cd) => {
    const arr = file.originalname.split('.');
    cd(null, Date.now() + '-img.' + arr[arr.length - 1]);
  },
});

const upload = multer({ storage });

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
const io = new SocketIo(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
  },
});

let connectCount = 0;

io.on('connection', (socket) => {
  connectCount++;
  io.emit('user count', connectCount);

  socket.on('disconnect', () => {
    connectCount--;
    io.emit('user count', connectCount);
  });
});

server.listen(process.env.PORT, (rej) => {
  if (rej) return console.log(rej);
  console.log(`Server started on port ${process.env.PORT}`);
});
