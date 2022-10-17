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
import PersonalInfoAccordion from "../../../../../accordion/personal-contacts";
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
              <Item
                title={
                  <a href="mailto:alesouza.dev@gmail.com">
                    alesouza.dev@gmail.com
                  </a>
                }
                icon={<RiMailFill />}
              />
              <Item
                title={
                  <a
                    href="https://wa.me/5511959147536?text=Hello"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    5511959147536
                  </a>
                }
                icon={<RiPhoneFill />}
              />
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default ProfessionalInfo;
