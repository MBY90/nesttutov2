import { Injectable, NestMiddleware } from "@nestjs/common";
import { REQUEST } from "@nestjs/core";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class ValidateCustomerAccountMiddelware implements NestMiddleware{
    use(req:Request,res:Response,next:NextFunction){
        const {valid}= req.headers
        if(valid){
            next() 
        }
        else {
            res.status(401).send({error:'account not valid'})
        }
    }
}