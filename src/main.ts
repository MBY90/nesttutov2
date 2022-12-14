import { ValidationPipe } from '@nestjs/common';
import { NestFactory ,} from '@nestjs/core';
import { SwaggerModule, DocumentBuilder ,} from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as session from  'express-session'
import * as passport from 'passport'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api")
  app.useGlobalPipes(new ValidationPipe());
  app.use(session({
    secret:"medmedmedmed",
    resave:false
  }))
  const config = new DocumentBuilder()
  .setTitle('nest tuto')
  .setDescription('nest tuto description')
  .setVersion('1.0')
  .addTag('nest')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
