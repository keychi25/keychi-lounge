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

const Blogs = () => {
  return (
    <Box w="100%" h="100vh" className="dot-background">
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
              minW={{ base: "100%", md: "720px", xl: "1140px" }}
              align="center"
            >
              <Text fontSize="6xl">blogs</Text>
              <Text fontSize="lg">
                メモ書きのようにブログを書き留めていきます（準備中）。
              </Text>
              <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} spacing={10}>
                <Box
                  as="section"
                  bg={useColorModeValue("gray.100", "inherit")}
                  py="12"
                  px={{ md: "8" }}
                >
                  <Card maxW="xl" mx="auto">
                    <CardHeader title="タイトル" />
                    <CardContent>
                      <Property label="ラベル" value="内容" />
                    </CardContent>
                  </Card>
                </Box>
                <Box
                  as="section"
                  bg={useColorModeValue("gray.100", "inherit")}
                  py="12"
                  px={{ md: "8" }}
                >
                  <Card maxW="xl" mx="auto">
                    <CardHeader title="タイトル" />
                    <CardContent>
                      <Property label="ラベル" value="内容" />
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

export default Blogs;
