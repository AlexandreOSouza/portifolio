import { Flex, Text } from "@chakra-ui/react";
import Folder from "./folder";
import RenderAboutContent from "./render-content";
import SideBar from "./side-bar";

const AboutMeContent = () => {
  return (
    <Flex flex={1} flexDirection={{ base: "column", lg: "row" }}>
      <SideBar />
      <Folder />
      <RenderAboutContent />
    </Flex>
  );
};

export default AboutMeContent;
