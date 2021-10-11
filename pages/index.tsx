import { Divider } from "@chakra-ui/layout";
import type { NextPage } from "next";
import SiteDescription from "../component/SiteDescription";
import MyProfile from "../component/MyProfile";
import Work from "../component/Work";
const Home: NextPage = () => {
  return (
    <>
      <SiteDescription />
      <Divider />
      <MyProfile />
      <Divider />
      <Work />
    </>
  );
};

export default Home;
