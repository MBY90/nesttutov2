import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class validateCustomerMiddelware implements NestMiddleware{
    use(req:Request,res:Response,next:NextFunction){
   console.log("hello,world,i am inside middelware customer")
   const {authorization}= req.headers
   if(!authorization)
   return res.status(403).send({error:"no auth token provided"});
   
   next()
    }
}