import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { RiCloseFill } from "react-icons/ri";
import CustomTab from "./tab";
import IndexPanel from "./tab-panel/index";
import MobilePanel from "./tab-panel/index/mobile";

const RenderAboutContent = () => {
  return (
    <>
      <Flex
        width={"50%"}
        maxWidth={"700px"}
        minWidth={"600px"}
        background={"primary.mid"}
        height={"100%"}
        borderRight={"1px solid"}
        borderColor={"lines.main"}
        display={{ base: "none", lg: "flex" }}
      >
        <Tabs variant="unstyled" width={"100%"}>
          <TabList defaultValue={0}>
            <CustomTab title={"index"} />
            <CustomTab title={"about-me"} />
          </TabList>

          <TabPanels
            borderTop={"1px solid"}
            borderColor={"lines.main"}
            height={"100%"}
          >
            <TabPanel pl={"39px"} pt={"17px"}>
              <IndexPanel />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
      <Flex
        display={{ base: "flex", lg: "none" }}
        height={"auto"}
        width={"100vw"}
        py={"40px"}
        px={"27px"}
      >
        <MobilePanel tab={"personal-info"} section={"bio"} />
      </Flex>
    </>
  );
};

export default RenderAboutContent;
