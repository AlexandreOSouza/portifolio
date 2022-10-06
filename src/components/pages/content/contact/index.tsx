import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  Flex,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import { RiReactjsFill, RiHtml5Fill, RiCss3Fill } from "react-icons/ri";
import { PAGE_TITLE } from "../../../../helper/constants";
import AccordionCustomButton from "../../../accordion/button";
import PersonalInfoAccordion from "../../../accordion/personal-contacts";
import FilterItem from "../projects/filter-item";
import ContactContainer from "./contact-container";

const ContactContent = () => {
  return (
    <>
      <Head>
        <title>{PAGE_TITLE.CONTACT}</title>
      </Head>
      <Flex flex={1} flexDirection={{ base: "column", lg: "row" }}>
        <Flex
          width={{ base: "100vw", lg: "310.5px" }}
          borderRight={"1px solid"}
          borderColor={"lines.main"}
        >
          <Accordion allowToggle allowMultiple defaultIndex={[0]}>
            <AccordionItem border={"none"}>
              {({ isExpanded }) => (
                <PersonalInfoAccordion
                  isExpanded={isExpanded}
                  width={{ base: "100vw", lg: "310px" }}
                />
              )}
            </AccordionItem>
          </Accordion>
        </Flex>
        <ContactContainer />
      </Flex>
    </>
  );
};

export default ContactContent;
