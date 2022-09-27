import { Flex } from "@chakra-ui/react";
import HelloContent from "./hello";

const MainContent = () => {
  return (
    <Flex flex={1} p={0} m={0}>
      <HelloContent />
    </Flex>
  );
};

export default MainContent;
