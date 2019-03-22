import { Module, forwardRef } from '@nestjs/common';
import { HousesResolver } from './resolver';
import { HousesService } from './service';
import { UsersModule } from '../users/module';
import { MongooseModule } from '@nestjs/mongoose';
import HouseSchema from './schema';

@Module({
  imports: [forwardRef(() => UsersModule), MongooseModule.forFeature([{ name: 'House', schema: HouseSchema }])], // Circular dependency
  providers: [HousesResolver, HousesService],
})
export class HousesModule {}
