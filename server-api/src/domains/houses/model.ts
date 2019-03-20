import { Field, ID, ObjectType } from 'type-graphql';
import { User } from '../users/model';

@ObjectType()
export class House {
  @Field(type => ID)
  id: string;
  
  @Field()
  piecesNumber: number;
  
  @Field()
  area: number;

  @Field()
  user: User;
}
