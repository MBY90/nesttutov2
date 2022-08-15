import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import {Request, Response} from 'express';
@Catch(HttpException)
export class HttpExecptionFilter implements  ExceptionFilter  {
catch (exception:HttpException,host:ArgumentsHost){
   console.log(exception.getResponse()) 
   console.log(exception.getStatus())
   console.log(exception)
   const context = host.switchToHttp()
   const request =context.getRequest<Request>()
   const response=context.getResponse<Response>()
   const status = exception.getStatus();

   response
   .status(status)
   .json({
     statusCode: status,
     message:exception.getResponse(),
   });
}
}