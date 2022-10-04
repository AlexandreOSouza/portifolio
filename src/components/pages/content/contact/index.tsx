import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  Flex,
  Text,
} from "@chakra-ui/react";
import { RiReactjsFill, RiHtml5Fill, RiCss3Fill } from "react-icons/ri";
import AccordionCustomButton from "../../../accordion/button";
import PersonalInfoAccordion from "../../../accordion/personal-contacts";
import FilterItem from "../projects/filter-item";

const ContactContent = () => {
  return (
    <Flex flex={1} flexDirection={{ base: "column", lg: "row" }}>
      <Flex
        width={{ base: "100vw", lg: "310.5px" }}
        borderRight={"1px solid"}
        borderColor={"lines.main"}
      >
        <Accordion allowToggle allowMultiple defaultIndex={[0]}>
          <AccordionItem border={"none"}>
            {({ isExpanded }) => (
              <PersonalInfoAccordion isExpanded={isExpanded} width={"310px"} />
            )}
          </AccordionItem>
        </Accordion>
      </Flex>
    </Flex>
  );
};

export default ContactContent;
