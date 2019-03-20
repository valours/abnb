import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: false, // turn off the debug mode
      playground: false, // disable the playground
    }),
  ],
})
export class ApplicationModule {}