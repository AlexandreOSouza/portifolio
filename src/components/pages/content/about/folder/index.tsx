import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useMemo } from "react";
import { RiMailFill, RiMarkdownFill, RiPhoneFill } from "react-icons/ri";
import { ABOUT_INDEX } from "../../../../../helper/constants";
import { usePage } from "../../../../../hooks/usePages";
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
    }
  }, [currentAboutSection]);

  return (
    <Flex
      height={"100%"}
      width={"242.5px"}
      borderRight={"1px solid"}
      borderColor={"lines.main"}
    >
      {renderContent}
    </Flex>
  );
};

export default Folder;
