import React from "react";
import { Box, Container, SimpleGrid } from "@chakra-ui/react";

const MyProfile = () => {
  return (
    <Box w="100%" h="100vh">
      <Container>
        <SimpleGrid columns={2} spacing={10}>
          <Box bg="tomato" height="80px"></Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default MyProfile;
