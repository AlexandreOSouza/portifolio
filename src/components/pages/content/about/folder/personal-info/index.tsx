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

const PersonalInfo = () => {
  return (
    <Accordion allowToggle allowMultiple defaultIndex={[0, 1]}>
      <AccordionItem border={"none"}>
        {({ isExpanded }) => (
          <>
            <Text textStyle={"label"} color={"white"}>
              <AccordionButton
                width={{ base: "100vw", lg: "242px" }}
                height={"46px"}
                borderBottom={isExpanded ? "1px solid" : "none"}
                borderColor={"lines.main"}
                columnGap={"10px"}
                background={{ base: "lines.main", lg: "primary.mid" }}
                _active={{
                  background: { base: "lines.main", lg: "primary.mid" },
                }}
                _hover={{
                  background: { base: "lines.main", lg: "primary.mid" },
                }}
              >
                {isExpanded ? <RiArrowRightSFill /> : <RiArrowDownSFill />}
                personal-info
              </AccordionButton>
            </Text>

            <AccordionPanel>
              <Item title={"high-school"} icon={<RiMarkdownFill />} isActive />
              <Item title={"university"} icon={<RiMarkdownFill />} />
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
      <AccordionItem border={"none"} mt={{ base: "3px", lg: "0" }}>
        {({ isExpanded }) => (
          <>
            <Text textStyle={"label"} color={"white"}>
              <AccordionButton
                width={{ base: "100vw", lg: "242px" }}
                height={"46px"}
                borderBottom={"1px solid"}
                borderTop={"1px solid"}
                borderColor={"lines.main"}
                columnGap={"10px"}
                background={{ base: "lines.main", lg: "primary.mid" }}
                _active={{
                  background: { base: "lines.main", lg: "primary.mid" },
                }}
                _hover={{
                  background: { base: "lines.main", lg: "primary.mid" },
                }}
              >
                {isExpanded ? <RiArrowRightSFill /> : <RiArrowDownSFill />}
                contacts
              </AccordionButton>
            </Text>

            <AccordionPanel>
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
