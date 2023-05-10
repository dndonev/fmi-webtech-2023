import { Server, Socket } from 'socket.io'

const roomToUsers = new Map<string, string[]>();

export const socketHandler = (io: Server, socket: Socket) => {
	const roomUsers = roomToUsers.get('my-room') || [];

	if (!roomUsers.includes(socket.id)) {
		socket.join('my-room');
		roomUsers.push(socket.id);
		roomToUsers.set('my-room', roomUsers);
	}
	incomingMessage(io, socket);
}

const incomingMessage = (io: Server, socket: Socket) => {
	socket.on('message', (message) => {
		console.log(message)
		io.in('my-room').emit('message', message);
	});
}