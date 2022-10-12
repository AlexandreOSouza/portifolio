import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  Flex,
} from "@chakra-ui/react";
import Head from "next/head";
import { FaEthereum, FaNodeJs } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";

import { RiCss3Fill, RiHtml5Fill, RiReactjsFill } from "react-icons/ri";
import { SiSolidity, SiTsnode, SiTypescript } from "react-icons/si";
import { PAGE_TITLE } from "../../../../helper/constants";
import { useFilter } from "../../../../hooks/useFilter";
import AccordionCustomButton from "../../../accordion/button";
import DefaultButton from "../../../CTA/default";
import FilterItem from "./filter-item";
import ProjectsList from "./projects-list";

const ProjectsContent = () => {
  const { filterList, cleanFilters } = useFilter();
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

                  <AccordionPanel
                    background={"primary.mid"}
                    pl={"22px"}
                    height={"600px"}
                  >
                    <Flex
                      flexDir={"column"}
                      pt={"20px"}
                      height={"100%"}
                      justifyContent={"space-between"}
                    >
                      <Flex flexDirection={"column"} rowGap={"20px"}>
                        <FilterItem
                          title={"Popstand"}
                          icon={<MdOutlineWorkOutline />}
                        />
                        <FilterItem title={"React"} icon={<RiReactjsFill />} />
                        <FilterItem title={"HTML"} icon={<RiHtml5Fill />} />
                        <FilterItem title={"CSS"} icon={<RiCss3Fill />} />
                        <FilterItem title={"Solidity"} icon={<SiSolidity />} />
                        <FilterItem title={"NodeJS"} icon={<FaNodeJs />} />
                        <FilterItem
                          title={"Typescript"}
                          icon={<SiTypescript />}
                        />
                        <FilterItem title={"Ethereum"} icon={<FaEthereum />} />
                      </Flex>
                      {filterList.length > 0 && (
                        <DefaultButton width={"100%"} onClick={cleanFilters}>
                          Clear All
                        </DefaultButton>
                      )}
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
