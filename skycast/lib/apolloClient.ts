'use client';

import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graphql.weatherapi.com', 
  cache: new InMemoryCache(),
});

export default client;
