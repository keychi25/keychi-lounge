import React from "react";
import {
  Box,
  Container,
  Flex,
  Stack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import RadertChart from "./graph/RadertChart";

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
    backgroundColor: "rgba(255, 99, 132, 0.2)",
    borderColor: "rgb(255, 99, 132)",
    pointBackgroundColor: "rgb(255, 99, 132)",
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: "rgb(255, 99, 132)",
  };

  const serverData = {
    labels: ["AWS", "GCP", "Linux", "Docker"],
    label: "DevOps Skill",
    data: [2, 2, 3, 5],
    fill: true,
    backgroundColor: "rgba(75, 192, 192, 0.2)",
    borderColor: "rgba(75, 192, 192)",
    pointBackgroundColor: "rgba(75, 192, 192)",
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: "rgba(75, 192, 192)",
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
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                <RadertChart {...frontendData} />
                <RadertChart {...backendData} />
                <RadertChart {...serverData} />
              </SimpleGrid>
            </Box>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Skill;
