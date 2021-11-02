import { Container, Text } from "@chakra-ui/react";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../component/date";
import { GetStaticProps, GetStaticPaths } from "next";
import marked from "marked";
import React, { useEffect } from "react";
import hljs from "highlight.js/lib/core";
import { ParsedUrlQuery } from "node:querystring";

interface Props {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}

// 1. Paramsの型を定義し、ParsedUrlQueryをextendsする
interface Params extends ParsedUrlQuery {
  id: string;
}

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  useEffect(() => {
    hljs.highlightAll();
  });
  return (
    <>
      <Container>
        <Text fontSize="xl">{postData.title}</Text>
        <div>
          <Date dateString={postData.date} />
        </div>
        <code>
          <span
            dangerouslySetInnerHTML={{
              __html: marked(postData.contentHtml),
            }}
          />
        </code>
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const postData = await getPostData(params!.id as string);
  return {
    props: {
      postData,
    },
  };
};
