import { gql } from 'graphql-request';

export const PlaylistsPosts = gql`
  query PlaylistPosts($slug: String!) {
    playlists(where: { slug: $slug }) {
      id
      title
      description
      posts {
        updated_at
        id
        title
        topics
        slug
        description
      }
    }
  }
`;
