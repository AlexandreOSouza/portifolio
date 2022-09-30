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
import Item from "../item";

const ProfessionalInfo = () => {
  return (
    <Accordion allowToggle allowMultiple defaultIndex={[0, 1]}>
      <AccordionItem border={"none"}>
        {({ isExpanded }) => (
          <>
            <AccordionCustomButton
              title={"professional-info"}
              isExpanded={isExpanded}
            />

            <AccordionPanel background={"primary.mid"}>
              <Item title={"high-school"} icon={<RiMarkdownFill />} isActive />
              <Item title={"university"} icon={<RiMarkdownFill />} />
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default ProfessionalInfo;
