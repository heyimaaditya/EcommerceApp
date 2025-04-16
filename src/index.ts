import express,{Express,Request,Response} from "express";
import { PORT } from "./secrets";
import rootRouter from "./routes";
import { PrismaClient } from './generated/prisma/index';
import { errorMiddleware } from "./middlewares/errors";
import { SignUpSchema } from "./schema/users";
const app:Express=express();
app.use(express.json());
app.use('/api',rootRouter);
export const prismaClient=new PrismaClient({
    log:['query']
})
app.use(errorMiddleware as express.ErrorRequestHandler);
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:3000');
});