import { Module, forwardRef } from '@nestjs/common';
import { UsersResolver } from './resolver';
import { UsersService } from './service';
import { HousesModule } from '../houses/module';

@Module({
  imports: [ forwardRef(() => HousesModule) ],
  providers: [UsersResolver, UsersService],
  exports: [UsersService]
})
export class UsersModule {}