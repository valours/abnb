import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from '../domains/users/module';
import { HousesModule } from 'src/domains/houses/module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    HousesModule,
    MongooseModule.forRoot('mongodb://localhost/abnb', { useNewUrlParser: true }),
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      // debug: false, // turn off the debug mode
      // playground: false, // disable the playground
    }),
  ],
})
export class ApplicationModule {}
