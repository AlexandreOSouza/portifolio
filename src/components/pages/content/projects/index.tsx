import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  Flex,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import { FaEthereum, FaNodeJs } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";

import {
  RiCss3Fill,
  RiHtml5Fill,
  RiMarkdownFill,
  RiReactjsFill,
} from "react-icons/ri";
import { SiSolidity, SiTsnode, SiTypescript } from "react-icons/si";
import { PAGE_TITLE } from "../../../../helper/constants";
import AccordionCustomButton from "../../../accordion/button";
import Item from "../about/folder/item";
import FilterItem from "./filter-item";
import ProjectsList from "./projects-list";

const ProjectsContent = () => {
  return (
    <>
      <Head>
        <title>{PAGE_TITLE.PROJECTS}</title>
      </Head>

      <Flex
        width={"100vw"}
        height={"100%"}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Flex
          width={{ base: "100vw", lg: "310.5px" }}
          borderRight={"1px solid"}
          borderColor={"lines.main"}
        >
          <Accordion allowMultiple defaultIndex={[0]}>
            <AccordionItem border={"none"}>
              {({ isExpanded }) => (
                <>
                  <AccordionCustomButton
                    title={"projects"}
                    isExpanded={isExpanded}
                    width={{ base: "100vw", lg: "310px" }}
                  />

                  <AccordionPanel background={"primary.mid"} pl={"22px"}>
                    <Flex rowGap={"20px"} flexDir={"column"} pt={"20px"}>
                      <FilterItem
                        title={"Popstand"}
                        icon={<MdOutlineWorkOutline />}
                      />
                      <FilterItem title={"React"} icon={<RiReactjsFill />} />
                      <FilterItem title={"HTML"} icon={<RiHtml5Fill />} />
                      <FilterItem title={"CSS"} icon={<RiCss3Fill />} />
                      <FilterItem title={"Solidity"} icon={<SiSolidity />} />
                      <FilterItem title={"Node JS"} icon={<FaNodeJs />} />
                      <FilterItem
                        title={"Typescript"}
                        icon={<SiTypescript />}
                      />
                      <FilterItem title={"Ethereum"} icon={<FaEthereum />} />
                    </Flex>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </Flex>
        <ProjectsList />
      </Flex>
    </>
  );
};

export default ProjectsContent;
