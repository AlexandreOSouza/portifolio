import { Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import { PAGE_TITLE } from "../../../../helper/constants";
import Folder from "./folder";
import RenderAboutContent from "./render-content";
import SideBar from "./side-bar";

const AboutMeContent = () => {
  return (
    <>
      <Head>
        <title>{PAGE_TITLE.ABOUT}</title>
      </Head>
      <Flex flex={1} flexDirection={{ base: "column", lg: "row" }}>
        <SideBar />
        <Folder />
        <RenderAboutContent />
      </Flex>
    </>
  );
};

export default AboutMeContent;
