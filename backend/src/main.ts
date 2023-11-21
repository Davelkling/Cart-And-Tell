import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet()); //protect against common backend vulnerability
  app.enableCors();
  await app.listen(8080);
}
bootstrap();
