import { Box, Container, Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import { BlogCard } from '..';
import { Blog } from '../playlists';

const PlayListPage = () => {
  //Fetch all the post on a particular playlist by using the playlists id
  const blogs: Blog[] = [
    {
      title: 'Creating rest end points with nestjs',
      description: 'The best of the best',
      categories: ['nestjs', 'webdev'],
    },
    {
      title: 'Creatinag rest end points with nestjs',
      description: 'The best of the best',
      categories: ['nestjs', 'webdev'],
    },
    {
      title: 'Creatingsaa rest end points with nestjs',
      description: 'The best of the best',
      categories: ['nestjs', 'webdev'],
    },
    {
      title: 'Creatinag rest end points with nestjs',
      description: 'The best of the best',
      categories: ['nestjs', 'webdev'],
    },
    {
      title: 'Creatingsaa rest end points with nestjs',
      description: 'The best of the best',
      categories: ['nestjs', 'webdev'],
    },
    {
      title: 'Creatinag rest end points with nestjs',
      description: 'The best of the best',
      categories: ['nestjs', 'webdev'],
    },
    {
      title: 'Creatingsaa rest end points with nestjs',
      description: 'The best of the best',
      categories: ['nestjs', 'webdev'],
    },
  ];
  return (
    <Box overflow='hidden'>
      <Box mb='5' ml='3'>
        <Text as='h2' fontSize={{ base: '2xl', md: '5xl' }}>
          Nestjs Course
        </Text>
        <Text color='gray.500'>
          Nestjs is one of the most popular nodejs web framework used to create
          scalable and performant systems. It is heavy framework in a sense it
          comes with a lot of things out of the box such as easy testing,
          Validation and other crucial stuff for making web application faster
        </Text>
      </Box>
      <Flex flexWrap='wrap'>
        {blogs.map((blog) => (
          <BlogCard
            key={blog.title}
            title={blog.title}
            categories={blog.categories}
            description={blog.description}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default PlayListPage;
