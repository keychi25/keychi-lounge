import { Divider } from "@chakra-ui/layout";
import SiteDescription from "../component/SiteDescription";
import MyProfile from "../component/MyProfile";
import Work from "../component/Work";
import Blogs from "../component/Blogs";
import Skill from "../component/Skill";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps } from "next";
export default function Home({
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
    <>
      <Navbar className="site-header" />
      <div id="site-description">
        <SiteDescription />
      </div>
      <Divider />
      <div id="my-profile">
        <MyProfile />
      </div>
      <Divider />
      <div id="work">
        <Work />
      </div>
      <Divider />
      <div id="blog">
        <Blogs allPostsData={allPostsData} />
      </div>
      <Divider />
      <div id="skill">
        <Skill />
      </div>
      <Divider />
      <Footer className="site-footer" />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
