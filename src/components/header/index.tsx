import { Flex, Text } from "@chakra-ui/react";
import HeaderButton from "../CTA/header-button";
import { RiMenuFill } from "react-icons/ri";
import { useState } from "react";

const BUTTON_INDEX = {
  HOME: 1,
  ABOUT: 2,
  PROJECTS: 3,
};

const Header = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Flex
      borderColor={"lines.main"}
      borderBottom={"1px solid"}
      width={"100vw"}
      height={"56px"}
      background="transparent"
      pl={"22px"}
      alignItems={"center"}
    >
      <Text color={"secondary.gray"} fontSize={"16px"} lineHeight={"20.99px"}>
        alexandre-souza
      </Text>

      <Flex ml={"12%"} display={{ base: "none", lg: "flex" }}>
        <HeaderButton
          isActive={selectedIndex === BUTTON_INDEX.HOME}
          onClick={() => setSelectedIndex(BUTTON_INDEX.HOME)}
        >
          _hello
        </HeaderButton>
        <HeaderButton
          isActive={selectedIndex === BUTTON_INDEX.ABOUT}
          onClick={() => setSelectedIndex(BUTTON_INDEX.ABOUT)}
        >
          _about-me
        </HeaderButton>
        <HeaderButton
          isActive={selectedIndex === BUTTON_INDEX.PROJECTS}
          onClick={() => setSelectedIndex(BUTTON_INDEX.PROJECTS)}
          isLastItem
        >
          _projects
        </HeaderButton>
      </Flex>
      <HeaderButton ml={"auto"} display={{ base: "none", lg: "flex" }}>
        _contact-me
      </HeaderButton>
      <Flex
        display={{ base: "flex", lg: "none" }}
        marginLeft={"auto"}
        mr={"18px"}
      >
        <RiMenuFill color="#607B96" />
      </Flex>
    </Flex>
  );
};

export default Header;
