import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="start">
        <Heading as="h1" size="2xl">Financial Times</Heading>
        <Text fontSize="lg">Welcome to the Financial Times. Stay updated with the latest news in World, Business, and Opinion.</Text>
        <Box>
          <Heading as="h2" size="lg" mb={4}>Main News</Heading>
          <Text>Latest news article goes here...</Text>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>Other News</Heading>
          <Text>Additional news articles go here...</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;