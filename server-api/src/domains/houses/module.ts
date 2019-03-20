import { Module, forwardRef } from '@nestjs/common';
import { HousesResolver } from './resolver';
import { HousesService } from './service';
import { UsersModule } from '../users/module';

@Module({ 
  imports: [ forwardRef(() => UsersModule) ], // Circular dependency
  providers: [HousesResolver, HousesService],
})
export class HousesModule {}