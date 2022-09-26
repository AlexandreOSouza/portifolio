import { Flex, Text } from "@chakra-ui/react";
import HeaderButton from "../CTA/header-button";
import { RiMenuFill } from "react-icons/ri";
import { useMemo, useState } from "react";

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
          isActive={selectedIndex === 1}
          onClick={() => setSelectedIndex(1)}
        >
          _hello
        </HeaderButton>
        <HeaderButton
          isActive={selectedIndex === 2}
          onClick={() => setSelectedIndex(2)}
        >
          _about-me
        </HeaderButton>
        <HeaderButton
          isActive={selectedIndex === 3}
          onClick={() => setSelectedIndex(3)}
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
