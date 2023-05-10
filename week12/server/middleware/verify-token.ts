import { Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken';

import { AuthorizedUserRequest } from '../models/authorized-user-request';
import { User } from '../models/user';


export function verifyTokenMiddleware(req: AuthorizedUserRequest, res: Response, next: NextFunction)
	: Response<any, Record<string, any>> {

	const authHeader = req.headers.authorization;
	const token = authHeader && authHeader.split(' ').pop();

	if (!token) {
		return res.sendStatus(401);
	}

	let user;
	try {
		user = verify(token, process.env.ACCESS_TOKEN_SECRET) as User;
	} catch (err) {
		return res.status(403).json(err).send(); // 403: Forbidden!!
	}
	if (!user) {
		return res.sendStatus(403);
	}

	req.user = user;
	next();
}