import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import { useMemo } from "react";
import { RiMailFill, RiMarkdownFill, RiPhoneFill } from "react-icons/ri";
import { ABOUT_INDEX } from "../../../../../helper/constants";
import { usePage } from "../../../../../hooks/usePages";
import Hobbies from "./hobbies";
import Item from "./item";
import PersonalInfo from "./personal-info";
import ProfessionalInfo from "./professional-info";

const Folder = () => {
  const { currentAboutSection } = usePage();

  const renderContent = useMemo(() => {
    if (currentAboutSection === ABOUT_INDEX.PROFESSIONAL) {
      return <ProfessionalInfo />;
    } else if (currentAboutSection === ABOUT_INDEX.PERSONAL) {
      return <PersonalInfo />;
    } else if (currentAboutSection === ABOUT_INDEX.HOBBIES) {
      return <Hobbies />;
    }
  }, [currentAboutSection]);

  return (
    <Flex
      height={"100%"}
      width={{ base: "100%", lg: "242.5px" }}
      borderRight={"1px solid"}
      borderColor={"lines.main"}
    >
      <Flex
        display={{ base: "flex", lg: "none" }}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <ProfessionalInfo />
        <PersonalInfo />
        <Hobbies />
        <Hobbies />
        <Hobbies />
      </Flex>
      <Flex display={{ base: "none", lg: "flex" }}>{renderContent},</Flex>
    </Flex>
  );
};

export default Folder;
