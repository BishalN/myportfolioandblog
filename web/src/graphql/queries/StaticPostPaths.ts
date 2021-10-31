import { gql } from 'graphql-request';

export const staticPostPathsQuery = gql`
  query StaticPostsPath {
    posts {
      slug
    }
  }
`;
