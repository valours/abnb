import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users.module';

@Module({
  imports: [
    UsersModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      debug: false, // turn off the debug mode
      // playground: false, // disable the playground
    }),
  ],
})
export class ApplicationModule {}