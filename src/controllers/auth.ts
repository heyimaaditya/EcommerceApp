import { Request,Response } from "express";
import { prismaClient } from "..";
import { hashSync } from "bcrypt";
export const signup=async (req:Request, res:Response) =>{
    const {email,password,name}=req.body;
    // Validate the request body
    let user=await prismaClient.user.findFirst({where:{email}});
    if(user){
        throw new Error('User already exists');
    }
    user=await prismaClient.user.create({
        data:{
            name,
            email,
            password:hashSync(password,10)
        }
    })
    res.json(user);
}