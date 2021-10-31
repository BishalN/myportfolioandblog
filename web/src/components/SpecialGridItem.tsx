import { GridItem, Text } from '@chakra-ui/react';

type SpecialGridItemProps = {
  title?: string;
  description: string;
};

export const SpecialGridItem: React.FC<SpecialGridItemProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <GridItem p='3'>
      <Text fontSize='4xl'>{title}</Text>
      <Text color='gray.700' display='inline'>
        {description}
      </Text>
      {children}
    </GridItem>
  );
};
