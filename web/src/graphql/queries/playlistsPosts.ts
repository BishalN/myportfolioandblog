import { gql } from 'graphql-request';

export const PlaylistsPosts = gql`
  query PlaylistPosts($slug: String!) {
    playlists(where: { slug: $slug }) {
      id
      title
      description
      posts {
        id
        title
        topics
        slug
        description
      }
    }
  }
`;
