import { Module } from '@nestjs/common';
import { AppController } from '../app.controller';
import { AppService } from '../services/app.service';

//The root module of the application.
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
