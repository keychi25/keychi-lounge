import React from "react";
import { Box, Container, Flex, Stack, Text } from "@chakra-ui/react";

const SiteDescription = () => {
  return (
    <Box w="100%" h="100vh" className="gradient-background">
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
              minW={{ base: "100%", md: "768px" }}
              align="center"
              color="white"
            >
              <Text fontSize="6xl">Keychi&apos;s Lounge</Text>
              <Text fontSize="lg">
                このサイトはエンジニアkeychiのポートフォリオサイトです。
                <br />
                製作物，スキル，ブログや趣味などについてまとめています。
                <br />
                休憩所（Lounge）のつもりで気楽にサイトをみていただければと思います。
              </Text>
            </Box>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default SiteDescription;
