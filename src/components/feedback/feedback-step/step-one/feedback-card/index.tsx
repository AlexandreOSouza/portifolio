import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { FEEDBACK_TITLE, STEP_TYPE } from "../../../../../helper/constants";

type Props = {
  step: STEP_TYPE;
  icon: React.ReactElement;
};

const FeedbackCard = ({ step, icon }: Props) => {
  return (
    <Flex
      flexDirection={"column"}
      bg="#edf3f8"
      background={"primary.blueDark"}
      height={"150px"}
      width={"100%"}
      borderRadius={"15px"}
      alignItems={"center"}
      justifyContent={"center"}
      cursor={"pointer"}
      _hover={{
        border: "2px solid lightGray",
      }}
    >
      {icon}
      <Text color={"lightgray"} fontWeight={"bold"}>
        {FEEDBACK_TITLE[step]}
      </Text>
    </Flex>
  );
};

export default FeedbackCard;
