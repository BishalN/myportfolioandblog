import { gql } from 'graphql-request';

export const playlistPageQuery = gql`
  query Playlist {
    playlists {
      id
      title
      slug
      description
      posts {
        updated_at
        title
        topics
        description
        slug
      }
    }
  }
`;
