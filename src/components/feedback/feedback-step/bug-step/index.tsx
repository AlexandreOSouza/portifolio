import { Button, Flex, Text, Textarea } from "@chakra-ui/react";
import { RiScreenshot2Fill } from "react-icons/ri";

const BugStep = () => {
  return (
    <Flex height={"75%"} width={"100%"} p={"10px"} flexDirection={"column"}>
      <Textarea
        height={"70%"}
        border={"1px solid"}
        borderColor={"lightGray"}
        color={"lightGray"}
        resize={"none"}
        placeholder={"Tell me some details about whats is happening."}
        _placeholder={{
          color: "lightGray",
        }}
      />
      <Flex height={"70px"} alignItems={"center"} columnGap={"10px"}>
        <Button
          background={"primary.blueDark"}
          p={0}
          _hover={{ background: "secondary.green" }}
        >
          <RiScreenshot2Fill color={"lightGray"} size={"25px"} />
        </Button>
        <Button
          width={"100%"}
          background={"primary.blueDark"}
          _hover={{ background: "secondary.green" }}
        >
          <Text color={"lightGray"}>Send feedback</Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default BugStep;
