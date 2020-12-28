import { Query, Resolver } from "type-graphql";
import User from "./user.entity";

@Resolver()
export default class UserResolver {
  @Query(() => User)
  async testing(): Promise<User> {
    return {
      id: 1,
      username: "phthphat"
    }
  }
}
