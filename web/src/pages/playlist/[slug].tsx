import { Box, Container, Flex, Text } from '@chakra-ui/layout';
import { request } from 'graphql-request';
import { GetStaticProps } from 'next';
import React from 'react';
import {
  PlaylistPostsQuery,
  StaticPlaylistsPathQueryQuery,
} from '../../generated';
import { PlaylistsPosts } from '../../graphql/queries/playlistsPosts';
import { staticPlaylistsPathsQuery } from '../../graphql/queries/StaticPlaylistsPathQuery';
import { baseUrl } from '../../utils/baseUrl';
import { BlogCard } from '../../components/BlogCard';

export async function getStaticPaths() {
  const paths: StaticPlaylistsPathQueryQuery = await request(
    baseUrl,
    staticPlaylistsPathsQuery
  );
  const pathFormat = [];
  paths.playlists.forEach((path) =>
    pathFormat.push({ params: { slug: path.slug } })
  );
  return {
    paths: pathFormat,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const posts: PlaylistPostsQuery = await request(baseUrl, PlaylistsPosts, {
    slug: context.params.slug,
  });
  return {
    props: posts,
  };
};

const PlayListPage = (props: PlaylistPostsQuery) => {
  console.log(props);
  return (
    <Box overflow='hidden'>
      <Box mb='5' ml='3'>
        <Text as='h2' fontSize={{ base: '2xl', md: '5xl' }}>
          {props.playlists[0].title}
        </Text>
        <Text color='gray.500'>{props.playlists[0].description}</Text>
      </Box>
      <Flex flexWrap='wrap'>
        {props.playlists[0].posts.map((blog) => (
          <BlogCard
            key={blog.title}
            title={blog.title}
            topics={blog.topics.split(',')}
            description={blog.description}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default PlayListPage;
