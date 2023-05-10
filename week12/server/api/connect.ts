import { Router, Application } from 'express';
import roomsController from './rooms/rooms-controller';
const router = Router();

export function connect(app: Application, path: string): void { //'/api'
	router.use('/rooms', roomsController);

	app.use(path, router);
}