import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Text,
} from "@chakra-ui/react";
import {
  RiMarkdownFill,
  RiMailFill,
  RiPhoneFill,
  RiArrowDownSFill,
  RiArrowRightSFill,
} from "react-icons/ri";
import AccordionCustomButton from "../../../../../accordion/button";
import PersonalInfoAccordion from "../../../../../accordion/personal-contacts";
import Item from "../item";

const PersonalInfo = () => {
  return (
    <Accordion allowMultiple>
      <AccordionItem border={"none"} mt={{ base: "3px", lg: "0" }}>
        {({ isExpanded }) => (
          <>
            <AccordionCustomButton
              title={"personal-info"}
              isExpanded={isExpanded}
            />

            <AccordionPanel background={"primary.mid"}>
              <Item title={"high-school"} icon={<RiMarkdownFill />} isActive />
              <Item title={"university"} icon={<RiMarkdownFill />} />
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
      <AccordionItem border={"none"} mt={{ base: "3px", lg: "0" }}>
        {({ isExpanded }) => <PersonalInfoAccordion isExpanded={isExpanded} />}
      </AccordionItem>
    </Accordion>
  );
};

export default PersonalInfo;
