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
import ReactMarkdown from "react-markdown";
import IndexPanel from "./tab-panel/index";

const RenderAboutContent = () => {
  return (
    <Flex
      width={"50%"}
      maxWidth={"700px"}
      minWidth={"600px"}
      background={"primary.mid"}
      height={"100%"}
      borderRight={"1px solid"}
      borderColor={"lines.main"}
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
          <IndexPanel />
          <IndexPanel />
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default RenderAboutContent;
