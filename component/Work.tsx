import React from "react";
import {
  Box,
  Container,
  Flex,
  Stack,
  Text,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

import { Card } from "./card/Card";
import { CardContent } from "./card/CardContent";
import { CardHeader } from "./card/CardHeader";
import { Property } from "./card/Property";

const Work = () => {
  return (
    <Box w="100%" h="100vh" class="dot-background">
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
            <Box
              minW={{ base: "100%", md: "1000px", xl: "1440px" }}
              align="center"
            >
              <Text fontSize="6xl">Works</Text>
              <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={10}>
                <Box
                  as="section"
                  bg={useColorModeValue("gray.100", "inherit")}
                  py="12"
                  px={{ md: "8" }}
                >
                  <Card maxW="3xl" mx="auto">
                    <CardHeader title="Account Info" />
                    <CardContent>
                      <Property label="Name" value="Chakra UI" />
                    </CardContent>
                  </Card>
                </Box>
                <Box
                  as="section"
                  bg={useColorModeValue("gray.100", "inherit")}
                  py="12"
                  px={{ md: "8" }}
                >
                  <Card maxW="3xl" mx="auto">
                    <CardHeader title="Account Info" />
                    <CardContent>
                      <Property label="Name" value="Chakra UI" />
                    </CardContent>
                  </Card>
                </Box>
                <Box
                  as="section"
                  bg={useColorModeValue("gray.100", "inherit")}
                  py="12"
                  px={{ md: "8" }}
                >
                  <Card maxW="3xl" mx="auto">
                    <CardHeader title="Account Info" />
                    <CardContent>
                      <Property label="Name" value="Chakra UI" />
                    </CardContent>
                  </Card>
                </Box>
              </SimpleGrid>
            </Box>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Work;
