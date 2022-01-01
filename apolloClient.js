import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.GRAPH_CMS_URI,
  cache: new InMemoryCache(),
});

export default client;
