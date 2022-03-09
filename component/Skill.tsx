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
import { Column } from "react-table";
import SkillTable from "./SkillTable";

type UnitConversion = {
  name: string;
  datetime: string;
  comment: string;
};

const data: UnitConversion[] = [
  {
    name: "基本情報技術者試験",
    datetime: "2017/4（学部2年）",
    comment: "/",
  },
  {
    name: "Ruby Association Certified Ruby Programmer Silver version 2.1",
    datetime: "2021/5（修士2年）",
    comment: "業務で使うらしいから勉強した。",
  },
  {
    name: "Ruby Association Certified Ruby Programmer Gold version 2.1",
    datetime: "2021/6（修士2年）",
    comment: "業務で使うらしいから勉強した。",
  },
  {
    name: "AWS Certified Solutions Architect - Associate（SAA-C02）",
    datetime: "2021/10（修士2年）",
    comment: "業務で使うらしいから勉強した。（ 二日酔いで受験して辛かった）",
  },
  {
    name: "AWS Certified Solutions Architect - Professional（SAP-C01）",
    datetime: "2022/3（修士2年）",
    comment: "業務で使うらしいから勉強した。",
  },
  {
    name: "高等学校教諭一種免許状（情報 / 情報）",
    datetime: "2022/3（修士2年終了時）",
    comment: "/",
  },
];

const columns: Column<UnitConversion>[] = [
  {
    Header: "取得資格",
    accessor: "name",
  },
  {
    Header: "取得日時",
    accessor: "datetime",
  },
  {
    Header: "備考/感想",
    accessor: "comment",
  },
];

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
    label: "Front End Skill",
    data: [2, 2, 3, 2.5, 3, 2],
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
    label: "Back End Skill",
    data: [3, 3, 3, 2.5, 1, 2.5],
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
    data: [3, 1, 2, 3],
    fill: true,
    backgroundColor: "rgba(75, 192, 192, 0.2)",
    borderColor: "rgba(75, 192, 192)",
    pointBackgroundColor: "rgba(75, 192, 192)",
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: "rgba(75, 192, 192)",
  };

  return (
    <Box w="100%" h="150vh">
      <Container>
        <Flex
          flexDirection="column"
          width="100wh"
          height="150vh"
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
              <Text fontSize="6xl">Skill</Text>
              <Text fontSize="lg">
                完全な自己判断のスキル表です。参考程度に見てください。
                <br />
                幅広く行っていますが、バックエンドやインフラのほうがやっていて楽しいです。
                <br />
                取得している資格の表ものせておきます。
              </Text>
              <Text fontSize="xl">スキルレーダーチャート</Text>
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                <RadertChart {...frontendData} />
                <RadertChart {...backendData} />
                <RadertChart {...serverData} />
              </SimpleGrid>
              <Text fontSize="xl">取得資格表</Text>
              <SkillTable columns={columns} data={data} />
            </Box>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Skill;
