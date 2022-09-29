import { Flex, Text } from "@chakra-ui/react";
import Folder from "./folder";
import SideBar from "./side-bar";

const AboutMeContent = () => {
  return (
    <Flex flex={1}>
      <SideBar />
      <Folder />
    </Flex>
  );
};

export default AboutMeContent;
