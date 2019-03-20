import { Query, Resolver, Root } from '@nestjs/graphql';
import { FieldResolver } from 'type-graphql';
import { HousesService } from './service';
import { UsersService } from '../users/service';
import { User } from '../users/model';
import { House } from './model';

@Resolver(() => House)
export class HousesResolver {
  constructor(
    private readonly housesService: HousesService,
    private readonly usersService: UsersService,
  ) {}

  @Query(returns => House)
  house() {
    return this.housesService.findOneById();
  }

  @FieldResolver()
  owner(@Root() house: House) {
    return this.usersService.findOneById();
  }
}
