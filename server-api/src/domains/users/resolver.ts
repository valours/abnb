import { Inject, forwardRef } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { User } from './model';
import { UsersService } from './service';

@Resolver(of => User)
export class UsersResolver {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly userService: UsersService) {}

  @Query(returns => User)
  user() {
    return this.userService.findOneById();
  }
}