import 'reflect-metadata';
import * as cors from 'cors';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/graphql.module';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule); // Nest application instance
  app.use(cors());
  await app.listen(3000);
}
bootstrap();
