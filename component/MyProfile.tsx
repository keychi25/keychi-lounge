import React from "react";
import { Box, Container, Flex, Stack, Text } from "@chakra-ui/react";

const MyProfile = () => {
  return (
    <Box w="100%" h="100vh">
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
            <Box minW={{ base: "100%", md: "768px" }} align="center">
              <Text fontSize="6xl">Self Introduction</Text>
              <Text fontSize="lg">
                教育学部（情報学科）出身の医療に興味があるエンジニア。
                大学3年生の時にはじめてWebアプリケーションを作成し、その面白さとIT技術の可能性に惹かれエンジニアとして職業を決定。
                Webフロントからサーバの構築などを主な範囲で，最近は機械学習にも興味あります。
                珈琲を片手に開発している時が自分の好きな時間です。
              </Text>
            </Box>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default MyProfile;
