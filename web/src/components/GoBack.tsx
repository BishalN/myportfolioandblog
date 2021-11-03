import React from 'react';
import { Text } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';

export const GoBack = () => {
  const router = useRouter();
  return (
    <Text
      cursor='pointer'
      my='2'
      color='green.500'
      onClick={() => router.back()}
    >
      &larr; go back
    </Text>
  );
};
