import { Button, Flex, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { RiScreenshot2Fill } from "react-icons/ri";
import { FEEDBACK_TITLE } from "../../../../helper/constants";
import { sendFeedback } from "../../../../helper/email";

const BugStep = () => {
  const [textarea, setTextarea] = useState("");

  const handleSubmit = () => {
    sendFeedback(textarea, FEEDBACK_TITLE[2]);
  };
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
        onChange={(e) => setTextarea(e.target.value)}
        value={textarea}
      />
      <Flex height={"70px"} alignItems={"center"} columnGap={"10px"}>
        <Button
          width={"100%"}
          background={"primary.blueDark"}
          _hover={{ background: "secondary.green" }}
          onClick={handleSubmit}
        >
          <Text color={"lightGray"}>Send feedback</Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default BugStep;
