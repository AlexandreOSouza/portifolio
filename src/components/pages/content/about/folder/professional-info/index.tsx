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
import {
  CONTENT_INDEX,
  ABOUT_CONTENT,
} from "../../../../../../helper/constants/about";
import { usePage } from "../../../../../../hooks/usePages";
import AccordionCustomButton from "../../../../../accordion/button";
import Item from "../item";

const ProfessionalInfo = () => {
  return (
    <Accordion allowMultiple defaultIndex={[0]}>
      <AccordionItem border={"none"}>
        {({ isExpanded }) => (
          <>
            <AccordionCustomButton
              title={"professional-info"}
              isExpanded={isExpanded}
            />

            <AccordionPanel background={"primary.mid"}>
              <Item
                title={"index"}
                icon={<RiMarkdownFill />}
                contentIndex={CONTENT_INDEX.PROFESSIONAL_INFO}
              />
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default ProfessionalInfo;
