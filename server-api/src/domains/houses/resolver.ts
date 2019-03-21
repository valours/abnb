import { Query, Resolver, Parent, ResolveProperty } from '@nestjs/graphql';
import { HousesService } from './service';
import { UsersService } from '../users/service';
import { House } from './model';

@Resolver(() => House)
export class HousesResolver {
  constructor(
    private readonly housesService: HousesService,
    private readonly usersService: UsersService,
  ) {}

  @Query(() => House)
  house() {
    return this.housesService.findOneById();
  }

  @ResolveProperty('owner')
  owner(@Parent() house: House) {
    return this.usersService.findOneById();
  }
}
