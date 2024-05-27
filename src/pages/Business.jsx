import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const Business = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="start">
        <Heading as="h1" size="2xl">Business News</Heading>
        <Text fontSize="lg">Latest updates in the business world.</Text>
        <Box>
          <Heading as="h2" size="lg" mb={4}>Business News Article</Heading>
          <Text>Details of the business news article...</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Business;