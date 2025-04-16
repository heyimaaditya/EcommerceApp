import { Router, RequestHandler } from "express";
import { login, signup, me } from "../controllers/auth";
import { errorhandler } from '../error-handler';
import authMiddleware from "../middlewares/auth";
const authRoutes:Router=Router();
authRoutes.post('/signup', errorhandler(signup) as unknown as RequestHandler);
authRoutes.post('/login', errorhandler(login) as unknown as RequestHandler);
authRoutes.get('/me',[authMiddleware], errorhandler(me))
export default authRoutes;