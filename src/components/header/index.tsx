import { Flex, Text } from "@chakra-ui/react";
import HeaderButton from "../CTA/header-button";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import { useState } from "react";
import MenuDrawer from "../drawer";
import { usePage } from "../../hooks/usePages";
import { PAGE_INDEX } from "../../helper/constants";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { currentPage, setCurrentPage } = usePage();

  return (
    <Flex
      borderBottom={"1px solid"}
      borderBottomColor={"lines.main"}
      width={"100vw"}
      height={"56px"}
      background={"primary.mid"}
      pl={"22px"}
      alignItems={"center"}
    >
      <Text
        color={"secondary.gray"}
        mr={"140px"}
        fontSize={"16px"}
        lineHeight={"20.99px"}
      >
        alexandre-souza
      </Text>

      <Flex display={{ base: "none", lg: "flex" }}>
        <HeaderButton
          isActive={currentPage === PAGE_INDEX.HOME}
          onClick={() => setCurrentPage(PAGE_INDEX.HOME)}
        >
          _hello
        </HeaderButton>
        <HeaderButton
          isActive={currentPage === PAGE_INDEX.ABOUT}
          onClick={() => setCurrentPage(PAGE_INDEX.ABOUT)}
        >
          _about-me
        </HeaderButton>
        <HeaderButton
          isActive={currentPage === PAGE_INDEX.PROJECTS}
          onClick={() => setCurrentPage(PAGE_INDEX.PROJECTS)}
          isLastItem
        >
          _projects
        </HeaderButton>
      </Flex>
      <HeaderButton
        ml={"auto"}
        display={{ base: "none", lg: "flex" }}
        isActive={currentPage === PAGE_INDEX.CONTACT}
        onClick={() => setCurrentPage(PAGE_INDEX.CONTACT)}
      >
        _contact-me
      </HeaderButton>
      <Flex
        display={{ base: "flex", lg: "none" }}
        marginLeft={"auto"}
        mr={"18px"}
      >
        {isDrawerOpen ? (
          <RiCloseFill
            color="#607B96"
            onClick={() => setIsDrawerOpen(false)}
            fontSize={"20px"}
          />
        ) : (
          <RiMenuFill color="#607B96" onClick={() => setIsDrawerOpen(true)} />
        )}
      </Flex>
      <MenuDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </Flex>
  );
};

export default Header;
