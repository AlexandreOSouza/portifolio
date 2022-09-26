import { Flex, Text } from "@chakra-ui/react";
import HeaderButton from "../CTA/header-button";

const Header = () => {
  return (
    <Flex
      borderColor={"lines.main"}
      borderBottom={"1px solid"}
      width={"100vw"}
      height={"56px"}
      background="transparent"
      px={"22px"}
      alignItems={"center"}
    >
      <Text color={"secondary.gray"} fontSize={"16px"} lineHeight={"20.99px"}>
        alexandre-souza
      </Text>

      <Flex ml={"150px"}>
        <HeaderButton>_hello</HeaderButton>
        <HeaderButton>_about-me</HeaderButton>
        <HeaderButton isLastItem>_projects</HeaderButton>
      </Flex>
    </Flex>
  );
};

export default Header;
