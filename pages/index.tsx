import { Divider } from "@chakra-ui/layout";
import type { NextPage } from "next";
import SiteDescription from "../component/SiteDescription";
import MyProfile from "../component/MyProfile";
const Home: NextPage = () => {
  return (
    <>
      <SiteDescription />
      <Divider />
      <MyProfile />
    </>
  );
};

export default Home;
