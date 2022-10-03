import { Flex, TabPanel, Text } from "@chakra-ui/react";

const textAbout = `I have 5 years of experience in web development lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat officia deserunt mollit anim id est laborum.`;

type Props = {
  tab: string;
  section: string;
};

const MobilePanel = ({ tab, section }: Props) => {
  return (
    <Flex flexDir={"column"}>
      <Flex>
        <Text color={"white"} mr={"10px"}>{`// ${tab}`}</Text>
        <Text color={"secondary.gray"}> {`/ ${section}`}</Text>
      </Flex>
      <Text color={"secondary.gray"} mt={"17px"}>
        {textAbout}
      </Text>
      ;
    </Flex>
  );
};

export default MobilePanel;
