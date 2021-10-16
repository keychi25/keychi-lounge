import { Divider } from "@chakra-ui/layout";
import type { NextPage } from "next";
import SiteDescription from "../component/SiteDescription";
import MyProfile from "../component/MyProfile";
import Work from "../component/Work";
import Blogs from "../component/Blogs";
import Skill from "../component/Skill";

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
      <Divider />
      <div id="blogs">
        <Blogs />
      </div>
      <Divider />
      <div id="skill">
        <Skill />
      </div>
    </>
  );
};

export default Home;
