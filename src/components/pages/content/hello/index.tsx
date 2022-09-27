import { Flex, Image, Text } from "@chakra-ui/react";
import Game from "./game";

const HelloContent = () => {
  return (
    <Flex flex={1}>
      <Flex
        pl={"10%"}
        width={{ base: "100vw", lg: "65vw" }}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <Text textStyle={"body"}>Hi all, I am</Text>
        <Text textStyle={"headline"}>Alexandre Souza</Text>
        <Text
          textStyle={"subheadline"}
          color={"secondary.blue"}
        >{`> Fullstack developer`}</Text>

        <Text
          textStyle={"label"}
          color={"secondary.gray"}
          mt={"81px"}
        >{`// complete the game to continue`}</Text>
        <Text
          textStyle={"label"}
          color={"secondary.gray"}
          mt={"9px"}
        >{`// you can also see it on my Github page`}</Text>
        <Text mt={"9px"}>
          <span style={{ color: "#4D5BCE" }}>const </span>
          <span style={{ color: "#43D9AD" }}>githubLink</span>
          <span style={{ color: "#FFFFFF" }}> = </span>
          <span
            style={{ color: "#E99287" }}
          >{`"https://github.com/AlexandreOSouza/portifolio"`}</span>
        </Text>
      </Flex>
      <Flex
        display={{ base: "none", lg: "flex" }}
        flex={1}
        alignItems={"center"}
      >
        <Game />
      </Flex>
    </Flex>
  );
};

export default HelloContent;
