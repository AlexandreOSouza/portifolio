import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  Flex,
  Text,
} from "@chakra-ui/react";
import {
  RiCss3Fill,
  RiHtml5Fill,
  RiMarkdownFill,
  RiReactjsFill,
} from "react-icons/ri";
import AccordionCustomButton from "../../../accordion/button";
import Item from "../about/folder/item";
import FilterItem from "./filter-item";

const ProjectsContent = () => {
  return (
    <Flex width={"100vw"} height={"100%"}>
      <Flex
        width={"310.5px"}
        borderRight={"1px solid"}
        borderColor={"lines.main"}
      >
        <Accordion allowToggle allowMultiple defaultIndex={[0]}>
          <AccordionItem border={"none"}>
            {({ isExpanded }) => (
              <>
                <AccordionCustomButton
                  title={"projects"}
                  isExpanded={isExpanded}
                  width={"310px"}
                />

                <AccordionPanel background={"primary.mid"} pl={"22px"}>
                  <Flex rowGap={"20px"} flexDir={"column"} pt={"20px"}>
                    <FilterItem title={"React"} icon={<RiReactjsFill />} />
                    <FilterItem title={"HTML"} icon={<RiHtml5Fill />} />
                    <FilterItem title={"CSS"} icon={<RiCss3Fill />} />
                  </Flex>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </Flex>
    </Flex>
  );
};

export default ProjectsContent;
