import { Flex } from "@chakra-ui/react";
import { RiBugFill } from "react-icons/ri";
import { BiConversation } from "react-icons/bi";
import { FcIdea } from "react-icons/fc";
import FeedbackCard from "./feedback-card";

const StepOne = () => {
  return (
    <Flex
      flex={1}
      width={"100%"}
      columnGap={"10px"}
      px={"20px"}
      justifyContent={"space-around"}
      alignItems={"center"}
    >
      <FeedbackCard
        title={"Bug"}
        icon={<RiBugFill size={"50px"} color={"green"} />}
      />
      <FeedbackCard title={"Idea"} icon={<FcIdea size={"50px"} />} />
      <FeedbackCard
        title={"Other"}
        icon={<BiConversation size={"50px"} color={"orange"} />}
      />
    </Flex>
  );
};

export default StepOne;
