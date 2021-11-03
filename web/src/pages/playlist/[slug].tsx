import { Box, Flex, Text } from '@chakra-ui/layout';
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
import { GoBack } from '../../components/GoBack';

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
  return (
    <Box overflow='hidden'>
      <Box mb='5' ml='3'>
        <GoBack />
        <Text as='h2' fontSize={{ base: '2xl', md: '5xl' }}>
          {props.playlists[0].title}
        </Text>
        <Text color='gray.500' maxW='4xl'>
          {props.playlists[0].description}
        </Text>
      </Box>
      <Flex flexWrap='wrap'>
        {props.playlists[0].posts.map((blog) => (
          <BlogCard
            updatedDate={blog.updated_at}
            slug={blog.slug}
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
