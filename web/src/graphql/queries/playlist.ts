import { gql } from 'graphql-request';

export const playlistPageQuery = gql`
  query Playlist {
    playlists {
      id
      title
      slug
      description
      posts {
        title
        topics
        description
        slug
      }
    }
  }
`;
