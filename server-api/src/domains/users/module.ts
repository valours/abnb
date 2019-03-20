import { Module } from '@nestjs/common';
import { UsersResolver } from './resolver';
import { UsersService } from './service';

@Module({
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}