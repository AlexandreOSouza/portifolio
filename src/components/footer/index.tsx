import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { RiLinkedinLine, RiInstagramLine, RiGithubFill } from "react-icons/ri";

const Footer = () => {
  return (
    <Flex
      marginTop={"auto"}
      width={"100%"}
      height={"50px"}
      borderColor={"lines.main"}
      borderTop={"1px solid"}
      alignItems={"center"}
      pl={"22px"}
    >
      <Text color={"secondary.gray"} fontSize={"16px"} lineHeight={"20.99px"}>
        Find me in:
      </Text>

      <Flex
        alignItems={"center"}
        height={"50px"}
        width={{ base: "154px", lg: "104px" }}
        ml={{ base: "auto", lg: "18px" }}
        justifyContent={"space-evenly"}
        borderColor={"lines.main"}
        borderLeft={"1px solid"}
        borderRight={"1px solid"}
      >
        <a
          href={"https://www.linkedin.com/in/alexandre-oliveira-souza/"}
          target={"_blank"}
          rel="noreferrer"
        >
          <RiLinkedinLine color="#607B96" size={"20px"} />
        </a>
        <Divider orientation="vertical" />
        <a
          href={"https://www.instagram.com/alexis.jsx/"}
          target={"_blank"}
          rel="noreferrer"
        >
          <RiInstagramLine color="#607B96" size={"20px"} />
        </a>
        <Flex
          borderLeft={"1px solid"}
          borderColor={"lines.main"}
          height={"50px"}
          justifyContent={"center"}
          alignItems={"center"}
          pl={"16px"}
          display={{ base: "flex", lg: "none" }}
        >
          <a
            href={"https://github.com/AlexandreOSouza/"}
            target={"_blank"}
            rel="noreferrer"
          >
            <RiGithubFill color="#607B96" size={"20px"} />
          </a>
        </Flex>
      </Flex>

      <Flex
        borderColor={"lines.main"}
        borderLeft={"1px solid"}
        height={"50px"}
        marginLeft={"auto"}
        px={"23px"}
        alignItems={"center"}
        display={{ base: "none", lg: "flex" }}
      >
        <a
          href={"https://github.com/AlexandreOSouza/"}
          target={"_blank"}
          rel="noreferrer"
        >
          <Flex>
            <Text
              color={"secondary.gray"}
              fontSize={"16px"}
              lineHeight={"20.99px"}
              mr={"7px"}
            >
              @AlexandreOSouza
            </Text>{" "}
            <RiGithubFill color="#607B96" size={"20px"} />
          </Flex>
        </a>
      </Flex>
    </Flex>
  );
};

export default Footer;