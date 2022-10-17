import { TabPanel, Text } from "@chakra-ui/react";
import { ABOUT_CONTENT } from "../../../../../../../helper/constants/about";
import { usePage } from "../../../../../../../hooks/usePages";

const IndexPanel = () => {
  const { currentAboutContent } = usePage();
  return (
    <Text color={"secondary.gray"}>
      <div
        dangerouslySetInnerHTML={{ __html: ABOUT_CONTENT[currentAboutContent] }}
      ></div>
    </Text>
  );
};

export default IndexPanel;
