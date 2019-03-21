import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const link = createHttpLink({
  uri: "http://localhost:3000/graphql",
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});

export default client;