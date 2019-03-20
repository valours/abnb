import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from '../domains/users/module'
import { HousesModule } from 'src/domains/houses/module';

@Module({
  imports: [
    UsersModule,
    HousesModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      // debug: false, // turn off the debug mode
      // playground: false, // disable the playground
    }),
  ],
})
export class ApplicationModule {}