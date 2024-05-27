import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const World = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="start">
        <Heading as="h1" size="2xl">World News</Heading>
        <Text fontSize="lg">Latest updates from around the world.</Text>
        <Box>
          <Heading as="h2" size="lg" mb={4}>World News Article</Heading>
          <Text>Details of the world news article...</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default World;