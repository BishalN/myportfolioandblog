import { Box, Container, Flex, Link, Text } from '@chakra-ui/layout';
import { Tooltip, VStack } from '@chakra-ui/react';
import React from 'react';
import { BlogCard } from './index';

//If you use the same named component inside the parenet component
//then it does not through error rather it crashes with vm error

const PlaylistCollection = () => {
  return (
    <Container maxW='container.xl' overflow='hidden'>
      <Box mb='5' ml='3'>
        <Text as='h2' fontSize={{ base: '2xl', md: '5xl' }}>
          Welcome to Blog playlist
        </Text>
        <Text color='gray.500'>
          A playlist is series of blogpost where I write about particular tool
          or subject
        </Text>
      </Box>
      <VStack>
        <PlayList
          title='Nestjs course'
          blogs={[
            {
              title: 'Creating CRUD Rest API using nestjs',
              categories: ['Nestjs course'],
              description:
                'This is the course for creating the rest endpoints using nestjs',
            },
            {
              title: 'Creating CRUD Rest API using nestjs',
              categories: ['Nestjs course'],
              description:
                'This is the course for creating the rest endpoints using nestjs',
            },
            {
              title: 'Creating CRUD Rest API using nestjs',
              categories: ['Nestjs course'],
              description:
                'This is the course for creating the rest endpoints using nestjs',
            },
          ]}
        />

        <PlayList
          title='Graphql course'
          blogs={[
            {
              title: 'Creating CRUD Rest API using Graphql',
              categories: ['Graphql course'],
              description:
                'This is the course for creating the rest endpoints using Graphql',
            },
            {
              title: 'Creating CRUD Rest API using Graphql',
              categories: ['Graphql course'],
              description:
                'This is the course for creating the rest endpoints using Graphql',
            },
            {
              title: 'Creating CRUD Rest API using Graphql',
              categories: ['Graphql course'],
              description:
                'This is the course for creating the rest endpoints using Graphql',
            },
          ]}
        />

        <PlayList
          title='BlockChain course'
          blogs={[
            {
              title: 'Creating CRUD Rest API using BlockChain',
              categories: ['BlockChain course'],
              description:
                'This is the course for creating the rest endpoints using BlockChain',
            },
            {
              title: 'Creating CRUD Rest API using BlockChain',
              categories: ['BlockChain course'],
              description:
                'This is the course for creating the rest endpoints using BlockChain',
            },
            {
              title: 'Creating CRUD Rest API using BlockChain',
              categories: ['BlockChain course'],
              description:
                'This is the course for creating the rest endpoints using BlockChain',
            },
          ]}
        />

        <PlayList
          title='Nodejs course'
          blogs={[
            {
              title: 'Creating CRUD Rest API using Nodejs',
              categories: ['Nodejs course'],
              description:
                'This is the course for creating the rest endpoints using Nodejs',
            },
            {
              title: 'Creating CRUD Rest API using Nodejs',
              categories: ['Nodejs course'],
              description:
                'This is the course for creating the rest endpoints using Nodejs',
            },
            {
              title: 'Creating CRUD Rest API using Nodejs',
              categories: ['Nodejs course'],
              description:
                'This is the course for creating the rest endpoints using Nodejs',
            },
          ]}
        />
      </VStack>
    </Container>
  );
};

export type Blog = { title: string; description: string; categories: string[] };

type PlayListProps = {
  title: string;
  blogs: Blog[];
};

export const PlayList: React.FC<PlayListProps> = ({
  children,
  blogs,
  title,
}) => {
  return (
    <Box>
      <Text as='h2' ml={{ base: '3', md: '3' }} fontSize='2xl'>
        <Tooltip label='See all the blogs in this playlist'>
          <Link href='#' target='_blank'>
            {title}
          </Link>
        </Tooltip>
      </Text>
      <Flex flexWrap='wrap'>
        {blogs.map((blog) => (
          <BlogCard
            key={blog.title}
            title={blog.title}
            description={blog.description}
            categories={blog.categories}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default PlaylistCollection;
