import { Request } from 'express'
import { User } from './user';

export interface AuthorizedUserRequest extends Request {
	user: User;
}