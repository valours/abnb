import { Module } from '@nestjs/common';
import { HousesResolver } from './resolver';
import { HousesService } from './service';

@Module({
  providers: [HousesResolver, HousesService],
})
export class HousesModule {}