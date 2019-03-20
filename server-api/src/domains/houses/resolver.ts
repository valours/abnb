import { Query, Resolver, ResolveProperty, Parent } from '@nestjs/graphql';
import { House } from './model';
import { HousesService } from './service';
import { UsersService } from '../users/service';

@Resolver('House')
export class HousesResolver {
  constructor(
    private readonly housesService: HousesService,
  ) {}

  @Query()
  house(): House {
    return this.housesService.findOneById();
  }

  @ResolveProperty()
  user() {
    return null;
  }
}