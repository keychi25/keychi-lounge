import { Divider } from "@chakra-ui/layout";
import type { NextPage } from "next";
import SiteDescription from "../component/SiteDescription";
import MyProfile from "../component/MyProfile";
import Work from "../component/Work";
import Blogs from "../component/Blogs";

const Home: NextPage = () => {
  return (
    <>
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
      <div id="blog">
        <Blogs />
      </div>
    </>
  );
};

export default Home;
