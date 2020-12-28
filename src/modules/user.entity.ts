import 'reflect-metadata'
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export default class User {
  @Field(() => Int)
  id: number

  @Field()
  username: string
}