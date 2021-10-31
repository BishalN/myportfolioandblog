import { gql } from 'graphql-request';

export const staticPlaylistsPathsQuery = gql`
  query StaticPlaylistsPathQuery {
    playlists {
      slug
    }
  }
`;
