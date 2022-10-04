import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { RiCloseFill } from "react-icons/ri";
import ProjectCard from "../project-card";

const ProjectsList = () => {
  const ProjectRow = () => {
    return (
      <Flex width={"100%"} justifyContent={"center"} columnGap={10}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Flex>
    );
  };

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
      <Box
        display={"grid"}
        gridTemplateColumns={{
          base: "repeat(auto-fill, minmax(165px, 1fr))",
          md: "repeat(auto-fill, minmax(230px, 1fr))",
          xl: "repeat(auto-fill, minmax(260px, 1fr))",
        }}
        borderTop={"1px solid"}
        borderColor={"lines.main"}
        alignItems={"center"}
        overflowY={"auto"}
        rowGap={10}
        columnGap={10}
        height={"100%"}
        py={"50px"}
        px={"100px"}
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Box>
    </Flex>
  );
};

export default ProjectsList;
