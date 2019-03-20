import { Controller, Get } from '@nestjs/common';
import { AppService } from './services/app.service';

// Basic controller sample with a single route.
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
