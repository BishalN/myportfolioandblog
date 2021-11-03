import React from 'react';
import { Badge, Box, Flex, Image, Stack, Link, Text } from '@chakra-ui/react';
import { BlogQuery, StaticPostsPathQuery } from '../../generated';
import { request } from 'graphql-request';
import { baseUrl } from '../../utils/baseUrl';
import { staticPostPathsQuery } from '../../graphql/queries/StaticPostPaths';
import ReactMarkDown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { GetStaticProps } from 'next';
import { blogQuery } from '../../graphql/queries/blog';
import { DateTime } from 'luxon';
import { BlogCard } from '../../components/BlogCard';
import { timetoRead } from '../../utils/calculateTimeToRead';
import NextLink from 'next/link';
import { GoBack } from '../../components/GoBack';

export async function getStaticPaths() {
  const paths: StaticPostsPathQuery = await request(
    baseUrl,
    staticPostPathsQuery
  );
  const pathFormat = [];
  paths.posts.forEach((path) =>
    pathFormat.push({ params: { slug: path.slug } })
  );
  return {
    paths: pathFormat,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const posts: BlogQuery = await request(baseUrl, blogQuery, {
    slug: context.params.slug,
  });
  return {
    props: posts,
  };
};

const BlogPage = (props: BlogQuery) => {
  const formattedDate = DateTime.fromISO(props.posts[0].updated_at).toFormat(
    'DD'
  );

  return (
    <Box>
      <section>
        <Flex>
          <Box border='1px' m='2' p='5' w='3xl' borderColor='gray.500'>
            <GoBack />
            <Flex>
              <Image
                src={props.posts[0].writer.avatar.formats.thumbnail.url}
                boxSize={100}
                rounded='full'
                alt='me'
              />
              <Box>
                <Text>{props.posts[0].writer.name}</Text>
                <Text color='gray.400'>{props.posts[0].writer.bio}</Text>
              </Box>
            </Flex>
            <Box mt='2' mb='5'>
              <Box>
                <Text fontSize='4xl'>{props.posts[0].title}</Text>
                <Text fontSize='xs' color='gray.400'>
                  Last updated {formattedDate}
                </Text>
                <Text fontSize='sm' color='gray.600'>
                  ~ {timetoRead(props.posts[0].description)} minute read
                </Text>
              </Box>
              <Stack direction='row'>
                {props.posts[0].topics.split(',').map((tool) => (
                  <Badge key={tool}>{tool}</Badge>
                ))}
              </Stack>
            </Box>
            <ReactMarkDown
              components={{
                a: ({ node, ...props }) => {
                  return (
                    <Link
                      {...props}
                      href={props.children[0] as string}
                      target='_blank'
                      color='green.600'
                    />
                  );
                },
              }}
              remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
            >
              {props.posts[0].description}
            </ReactMarkDown>
          </Box>
          <Box
            border='1px'
            display={{ base: 'none', lg: 'block' }}
            m='2'
            h='100vh'
            overflow='scroll'
            p='5'
            w='lg'
            borderColor='gray.500'
            sx={{
              '&::-webkit-scrollbar': {
                width: '12px',
                borderRadius: '8px',
                backgroundColor: `rgba(0, 0, 0, 0.05)`,
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: `rgba(0, 0, 0, 0.05)`,
              },
            }}
          >
            <Text ml='3'>
              Related posts on{' '}
              <NextLink
                href={`/playlist/${props.posts[0].playlist?.slug}`}
                passHref
              >
                <Link color='green.500' mr='1'>
                  {props.posts[0].playlist?.title}
                </Link>
              </NextLink>
              playlist
            </Text>
            {props.posts[0].playlist?.posts.map((post) => (
              <BlogCard
                updatedDate={post.updated_at}
                slug={post.slug}
                noOfLines={2}
                key={post.title}
                title={post.title}
                topics={post.topics.split(',')}
                description={post.description}
              />
            ))}
          </Box>
        </Flex>
      </section>
    </Box>
  );
};

export default BlogPage;
