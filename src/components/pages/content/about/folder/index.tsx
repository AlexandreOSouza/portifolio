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
import ProfessionalInfo from "./professional-info";

const Folder = () => {
  const { currentAboutSection } = usePage();

  const renderContent = useMemo(() => {
    if (currentAboutSection === ABOUT_INDEX.PROFESSIONAL) {
      return <ProfessionalInfo />;
    }
  }, [currentAboutSection]);

  return (
    <Flex
      height={{ base: "auto", lg: "100%" }}
      width={{ base: "100%", lg: "242.5px" }}
      borderRight={"1px solid"}
      borderColor={"lines.main"}
    >
      <Flex
        display={{ base: "flex", lg: "none" }}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <ProfessionalInfo />
      </Flex>
      <Flex display={{ base: "none", lg: "flex" }}>{renderContent},</Flex>
    </Flex>
  );
};

export default Folder;
