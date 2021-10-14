import React from "react";
import {
  Box,
  Container,
  Flex,
  Stack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import RadertBar from "./graph/RadertBar";

const Skill = () => {
  const frontendData = {
    labels: [
      "HTML",
      "CSS",
      "Javascript",
      "typescript",
      "Nuxt（Vue）",
      "Next（Reacct）",
    ],
    label: "FrontEnd Skill",
    data: [2, 2, 3, 2.5, 4, 3],
    fill: true,
    backgroundColor: "rgba(54, 162, 235, 0.2)",
    borderColor: "rgb(54, 162, 235)",
    pointBackgroundColor: "rgb(54, 162, 235)",
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: "rgb(54, 162, 235)",
  };

  const backendData = {
    labels: ["Ruby", "Python", "Java", "Mysql", "PostgreSQL", "mongoDB"],
    label: "BackEnd Skill",
    data: [2, 2, 3, 2.5, 4, 3],
    fill: true,
    backgroundColor: "rgba(54, 162, 235, 0.2)",
    borderColor: "rgb(54, 162, 235)",
    pointBackgroundColor: "rgb(54, 162, 235)",
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: "rgb(54, 162, 235)",
  };

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
            <Box
              minW={{ base: "100%", md: "1000px", xl: "1440px" }}
              align="center"
            >
              <Text fontSize="6xl">Skill</Text>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <RadertBar {...frontendData} />
                <RadertBar {...backendData} />
              </SimpleGrid>
            </Box>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Skill;
