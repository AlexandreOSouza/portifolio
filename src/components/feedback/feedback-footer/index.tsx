import { Flex, Text } from "@chakra-ui/react";

const FeedbackFooter = () => {
  return (
    <Flex
      justifyContent={"center"}
      height={"30px"}
      position={"fixed"}
      mt={"270px"}
    >
      <Text color={"lightGray"} fontSize={"14px"}>
        Make with ❤️ by Alesouza
      </Text>
    </Flex>
  );
};

export default FeedbackFooter;
