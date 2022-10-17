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
import { CONTENT_INDEX } from "../../../../../../helper/constants/about";
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
              <Item
                title={"index"}
                icon={<RiMarkdownFill />}
                contentIndex={CONTENT_INDEX.PERSONAL_INFO}
              />
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
