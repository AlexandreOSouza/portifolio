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
import Item from "../item";

const Hobbies = () => {
  return (
    <Accordion allowToggle>
      <AccordionItem border={"none"} mt={{ base: "3px", lg: "0" }}>
        {({ isExpanded }) => (
          <>
            <AccordionCustomButton title={"hobbies"} isExpanded={isExpanded} />

            <AccordionPanel background={"primary.mid"}>
              <Item
                title={"high-school"}
                icon={<RiMarkdownFill />}
                contentIndex={CONTENT_INDEX.HOBBIES_INFO}
              />
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default Hobbies;
