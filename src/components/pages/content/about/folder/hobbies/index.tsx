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
import Item from "../item";

const Hobbies = () => {
  return (
    <Accordion allowToggle allowMultiple defaultIndex={[0, 1]}>
      <AccordionItem border={"none"}>
        {({ isExpanded }) => (
          <>
            <Text textStyle={"label"} color={"white"}>
              <AccordionButton
                width={"242px"}
                height={"46px"}
                borderBottom={"1px solid"}
                borderColor={"lines.main"}
                columnGap={"10px"}
              >
                {isExpanded ? <RiArrowRightSFill /> : <RiArrowDownSFill />}
                hobbies
              </AccordionButton>
            </Text>

            <AccordionPanel>
              <Item title={"high-school"} icon={<RiMarkdownFill />} isActive />
              <Item title={"university"} icon={<RiMarkdownFill />} />
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default Hobbies;
