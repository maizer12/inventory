import express from 'express';
import http from 'http';
import { Server as SocketIo } from 'socket.io';
import cors from 'cors';

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new SocketIo(server, {
	cors: {
		origin: 'http://localhost:5173',
		methods: ['GET', 'POST'],
	},
});

const users = {};

io.on('connection', socket => {
	socket.on('new user', name => {
		users[socket.id] = name;
		io.emit('update users', Object.values(users));
	});

	socket.on('chat message', data => {
		io.emit('chat message', { message: data.message, name: data.name });
	});

	socket.on('disconnect', () => {
		delete users[socket.id];
		io.emit('update users', Object.values(users));
	});
});

server.listen(4000, () => {
	console.log('Listening on *:4000');
});
