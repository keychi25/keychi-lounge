import React from "react";
import Link from "next/link";
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
import { CardHeader } from "./card/CardHeader";
import { CardContent } from "./card/CardContent";
import { Property } from "./card/Property";

export default function Blogs({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
    tags: Array<string>;
  }[];
}) {
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
              <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} spacing={10}>
                {allPostsData.map((cardBlog: any) => (
                  <Box
                    key={cardBlog.id}
                    as="section"
                    bg={useColorModeValue("gray.100", "inherit")}
                    py="12"
                    px={{ md: "8" }}
                  >
                    <Card maxW="xl" mx="auto">
                      <CardHeader
                        title={cardBlog.title}
                        action={
                          <Link href={`/blog/${cardBlog.id}`}>こちら</Link>
                        }
                      />
                      <CardContent>
                        <Property
                          label={`作成日：${cardBlog.date}`}
                          value={`カテゴリ：${cardBlog.tags}`}
                        />
                      </CardContent>
                    </Card>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
}
