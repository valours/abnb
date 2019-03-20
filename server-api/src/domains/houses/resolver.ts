import { Query, Resolver} from '@nestjs/graphql';
import { House } from './model';
import { HousesService } from './service';

@Resolver('House')
export class HousesResolver {
  constructor(private readonly housesService: HousesService) {}

  @Query(returns => House)
  house(): House {
    return this.housesService.findOneById();
  }

}