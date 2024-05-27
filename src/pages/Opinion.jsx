import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const Opinion = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="start">
        <Heading as="h1" size="2xl">Opinion</Heading>
        <Text fontSize="lg">Read the latest opinions from our experts.</Text>
        <Box>
          <Heading as="h2" size="lg" mb={4}>Opinion Article</Heading>
          <Text>Details of the opinion article...</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Opinion;