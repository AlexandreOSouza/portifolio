import { Flex, Text } from "@chakra-ui/react";
import { RiCloseFill } from "react-icons/ri";

const ProjectsList = () => {
  return (
    <Flex flex={1} flexDirection={"column"}>
      <Flex
        height={"45px"}
        width={"200px"}
        borderRight={"1px solid"}
        borderColor={"lines.main"}
        color={"secondary.gray"}
        justifyContent={"space-between"}
        alignItems={"center"}
        pr={"12px"}
        pl={"14px"}
      >
        <Text textStyle={"label"}>React; CSS</Text>
        <RiCloseFill />
      </Flex>
      <Flex flex={1} borderTop={"1px solid"} borderColor={"lines.main"}></Flex>
    </Flex>
  );
};

export default ProjectsList;
