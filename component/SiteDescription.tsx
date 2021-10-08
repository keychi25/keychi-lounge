import React from "react";
import { Box, Container, Flex, Stack, Text } from "@chakra-ui/react";

const SiteDescription = () => {
  return (
    <Box bg="#81cac4" w="100%" h="100vh">
      <Container>
        <Flex
          flexDirection="column"
          width="100wh"
          height="100vh"
          justifyContent="center"
          alignItems="center"
        >
          <Stack
            flexDir="column"
            mb="2"
            justifyContent="center"
            alignItems="center"
          >
            <Box minW={{ base: "90%", md: "468px" }} align="center">
              <Text fontSize="6xl">Keychi&apos;s Lounge</Text>
            </Box>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default SiteDescription;
