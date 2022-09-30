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

const PersonalInfo = () => {
  return (
    <Accordion allowToggle allowMultiple defaultIndex={[0, 1]}>
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
        {({ isExpanded }) => (
          <>
            <AccordionCustomButton title={"contacts"} isExpanded={isExpanded} />

            <AccordionPanel background={"primary.mid"}>
              <Item
                title={
                  <a href="mailto:alesouza.dev@gmail.com">
                    alesouza.dev@gmail.com
                  </a>
                }
                icon={<RiMailFill />}
                isActive
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
                isActive
              />
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default PersonalInfo;
