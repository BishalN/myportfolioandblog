import React from 'react';
import NextImage from 'next/image';
import { Box, Text } from '@chakra-ui/layout';
import { HomePageQuery } from '../generated';
import request from 'graphql-request';
import { baseUrl } from '../utils/baseUrl';
import { homePageQuery } from '../graphql/queries/home';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async (context) => {
  const landingPageData: HomePageQuery = await request(baseUrl, homePageQuery);
  return {
    props: landingPageData,
  };
};

const Test = (prop: HomePageQuery) => {
  return (
    <Box>
      <Box position='fixed' overflow='hidden' h='50vh' w='50vw' zIndex={-10}>
        <NextImage
          src={prop.homepage.projects[0].bg.url}
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </Box>
      <Text fontSize='5xl' color='white'>
        Good Text
      </Text>
    </Box>
  );
};

export default Test;
