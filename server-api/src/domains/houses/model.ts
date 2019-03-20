import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class House {
  @Field()
  id: string;
  
  @Field()
  piecesNumber: number;
  
  @Field()
  area: number;
}
