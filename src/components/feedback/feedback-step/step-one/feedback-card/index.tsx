import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { FEEDBACK_TITLE, STEP_TYPE } from "../../../../../helper/constants";
import { usePage } from "../../../../../hooks/usePages";

type Props = {
  step: STEP_TYPE;
  icon: React.ReactElement;
};

const FeedbackCard = ({ step, icon }: Props) => {
  const { changeStep } = usePage();
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
      onClick={() => changeStep(step)}
    >
      {icon}
      <Text color={"lightgray"} fontWeight={"bold"}>
        {FEEDBACK_TITLE[step]}
      </Text>
    </Flex>
  );
};

export default FeedbackCard;
