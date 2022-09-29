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
import { RiMailFill, RiMarkdownFill, RiPhoneFill } from "react-icons/ri";
import Item from "./item";
import PersonalInfo from "./personal-info";

const Folder = () => {
  return (
    <Flex
      height={"100%"}
      width={"242.5px"}
      borderRight={"1px solid"}
      borderColor={"lines.main"}
    >
      <PersonalInfo />
    </Flex>
  );
};

export default Folder;
