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
          formats
          url
        }
      }
      playlist {
        title
        slug
        posts {
          updated_at
          title
          topics
          description
          slug
        }
      }
    }
  }
`;
