import { Box, Container, Flex, Link, Text } from '@chakra-ui/layout';
import { Tooltip, VStack } from '@chakra-ui/react';
import { request } from 'graphql-request';
import { GetStaticProps } from 'next';
import React from 'react';
import { BlogCard } from '../components/BlogCard';
import { PlaylistPageQuery } from '../generated';
import { playlistPageQuery } from '../graphql/queries/playlist';
import { baseUrl } from '../utils/baseUrl';

export const getStaticProps: GetStaticProps = async (context) => {
  const playlistPageData: PlaylistPageQuery = await request(
    baseUrl,
    playlistPageQuery
  );
  return {
    props: playlistPageData,
  };
};

const PlaylistCollection = (props: PlaylistPageQuery) => {
  console.log(props);
  return (
    <Container my='5' maxW='container.xl' overflow='hidden'>
      <Box mb='5' ml='3'>
        <Text as='h2' fontSize={{ base: '2xl', md: '5xl' }}>
          Welcome to Blog playlist
        </Text>
        <Text color='gray.500'>
          A playlist is series of blogpost where I write about particular tool
          or subject
        </Text>
      </Box>
      <VStack spacing='5'>
        {props.playlists.map((playlist) => {
          console.log(playlist.slug);
          return (
            <PlayList
              key={playlist.title}
              slug={playlist.slug}
              title={playlist.title}
              blogs={playlist.posts as Blog[]}
            />
          );
        })}
      </VStack>
    </Container>
  );
};

export type Blog = {
  title: string;
  description: string;
  topics: string;
  slug: string;
};

type PlayListProps = {
  slug: string;
  title: string;
  blogs: Blog[];
};

export const PlayList: React.FC<PlayListProps> = ({
  children,
  blogs,
  title,
  slug,
}) => {
  return (
    <Box w='full'>
      <Text as='h2' mb='-4' ml={{ base: '3', md: '3' }} fontSize='2xl'>
        <Tooltip label='See all the blogs in this playlist'>
          <Link href={`/playlist/${slug}`}>{title}</Link>
        </Tooltip>
      </Text>
      <Flex flexWrap='wrap'>
        {blogs.map((blog) => (
          <BlogCard
            slug={blog.slug}
            key={blog.title}
            title={blog.title}
            description={blog.description}
            topics={blog.topics.split(',')}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default PlaylistCollection;
