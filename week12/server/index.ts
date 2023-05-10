
import express, { Application } from 'express'; // === const express = require('express');
import { config } from 'dotenv';
import { Server } from 'http';
import { Server as SocketServer } from 'socket.io';
import { connect } from './api/connect'; // const {a} = {a: 5}
import cors from 'cors';
import { socketHandler } from './api/socket-handler';
config({ path: __dirname + '/.env' });

const app: Application = express();
const http = new Server(app);
const io = new SocketServer(http, {
	cors: {
		origin: 'http://localhost:' + '4200',
		methods: ['GET', 'POST'],
		allowedHeaders: ['my-custom-header'],
		credentials: true
	}
});

io.on('connection', (socket) => socketHandler(io, socket));

app.use(cors());

connect(app, '/api');

http.listen(3000, () => console.log(`$Server listening`));

// javascript
// typescrypt = javascript + types = new language