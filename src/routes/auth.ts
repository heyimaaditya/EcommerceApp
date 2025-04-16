import { Router } from "express";
import { signup } from "../controllers/auth";
const authRoutes:Router=Router();
authRoutes.get('/signup', signup);
export default authRoutes;