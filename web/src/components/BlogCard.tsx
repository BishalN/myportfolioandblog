import { Box, Text, Link, Badge, Stack, Button } from '@chakra-ui/react';

type BlogCardItemProps = {
  title: string;
  topics?: string[];
  description?: string;
  noOfLines?: number;
  slug: string;
};

export const BlogCard: React.FC<BlogCardItemProps> = ({
  title,
  children,
  topics,
  description,
  noOfLines,
  slug,
}) => {
  return (
    <Box
      mx={{ base: '1', md: '4' }}
      mt='4'
      w={{ base: '100%', md: 'sm' }}
      rounded='sm'
      p='3'
      bg='gray.300'
    >
      <Text fontSize='xl' isTruncated color='green.500'>
        <Link href={`/blog/${slug}`} target='_blank'>
          {title}
        </Link>
      </Text>

      <Stack direction='row' my='2'>
        {topics.map((topic) => (
          <Badge key={topic}>{topic}</Badge>
        ))}
      </Stack>

      <Text noOfLines={noOfLines || 10}>{description}</Text>

      <Box display='flex' justifyContent='end'>
        <Button>Read Blog</Button>
      </Box>
    </Box>
  );
};
