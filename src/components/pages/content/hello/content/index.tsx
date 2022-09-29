import { Flex, Text } from "@chakra-ui/react";

const MainContent = () => {
  return (
    <Flex flexDirection={"column"}>
      <Text textStyle={"body"}>Hi all, I am</Text>
      <Text
        textStyle={"headline"}
        fontSize={{ base: "35px", sm: "50px", md: "60px", lg: "62px" }}
      >
        Alexandre Souza
      </Text>
      <Text
        textStyle={{ base: "subheadlineMobile", lg: "subheadline" }}
        color={{ base: "accent.green", lg: "secondary.blue" }}
      >{`> Fullstack developer`}</Text>
      <Text
        textStyle={"label"}
        color={"secondary.gray"}
        mt={"81px"}
        display={{ base: "none", lg: "flex" }}
      >{`// complete the game to continue`}</Text>
      <Text
        textStyle={{ base: "code", lg: "label" }}
        color={"secondary.gray"}
        mt={{ base: "10vh", lg: "9px" }}
        maxWidth={{ base: "calc(100vw - 60px)", lg: "100%" }}
      >{`// you can find this source code on my Github`}</Text>
      <Text mt={"9px"} maxWidth={{ base: "calc(100vw - 60px)", lg: "100%" }}>
        <span style={{ color: "#4D5BCE" }}>const </span>
        <span style={{ color: "#43D9AD" }}>githubLink</span>
        <span style={{ color: "#FFFFFF" }}> = </span>
        <span
          style={{ color: "#E99287" }}
        >{`"https://github.com/AlexandreOSouza/portifolio"`}</span>
      </Text>
    </Flex>
  );
};

export default MainContent;
