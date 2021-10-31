import { gql } from 'graphql-request';

export const blogQuery = gql`
  query Blog($slug: String!) {
    posts(where: { slug: $slug }) {
      id
      title
      created_at
      updated_at
      topics
      description
      slug
      writer {
        id
        name
        bio
        avatar {
          url
        }
      }
      playlist {
        title
        slug
        posts {
          title
          topics
          description
          slug
        }
      }
    }
  }
`;