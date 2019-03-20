import { Query, Resolver } from '@nestjs/graphql';
import { User } from './model';
import { UsersService } from './service';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Query(returns => User)
  user(): User {
    return this.userService.findOneById();
  }
}