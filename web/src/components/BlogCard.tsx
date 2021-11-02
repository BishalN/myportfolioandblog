import { Box, Text, Link, Badge, Stack, Button } from '@chakra-ui/react';
import { DateTime } from 'luxon';
import { useRouter } from 'next/dist/client/router';
import NextLink from 'next/link';

type BlogCardItemProps = {
  title: string;
  topics?: string[];
  description?: string;
  noOfLines?: number;
  slug: string;
  updatedDate: string;
};

export const BlogCard: React.FC<BlogCardItemProps> = ({
  title,
  topics,
  description,
  noOfLines,
  slug,
  updatedDate,
}) => {
  const formattedDate = DateTime.fromISO(updatedDate).toFormat('DD');
  return (
    <Box
      mx={{ base: '1', md: '4' }}
      mt='4'
      w={{ base: '100%', md: 'sm' }}
      rounded='lg'
      p='3'
      bg='gray.300'
    >
      <Text fontSize='xl' isTruncated color='green.500'>
        <NextLink href={`/blog/${slug}`} passHref>
          <Link>{title}</Link>
        </NextLink>
      </Text>

      <Text fontSize='sm' color='gray.600'>
        Last updated {formattedDate}
      </Text>

      <Stack direction='row' my='2'>
        {topics.map((topic) => (
          <Badge key={topic}>{topic}</Badge>
        ))}
      </Stack>

      <Text noOfLines={noOfLines || 10}>{description}</Text>

      <Box display='flex' justifyContent='end'>
        <NextLink href={`/blog/${slug}`} passHref>
          <Link
            bg='white'
            rounded='lg'
            p='2'
            _hover={{ bg: 'gray.500', color: 'white' }}
          >
            Read Blog
          </Link>
        </NextLink>
      </Box>
    </Box>
  );
};
