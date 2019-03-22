import { Field, ObjectType } from 'type-graphql';
import { User } from '../users/model';

@ObjectType({ description: 'the house model'})
export class House {
  @Field()
  id: string;

  @Field()
  piecesNumber: number;

  @Field()
  area: number;

  @Field(type => User, {nullable: true})
  owner?: User;
}
