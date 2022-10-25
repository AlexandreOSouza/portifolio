import { Flex } from "@chakra-ui/react";
import { RiBugFill } from "react-icons/ri";
import { BiConversation } from "react-icons/bi";
import { FcIdea } from "react-icons/fc";
import FeedbackCard from "./feedback-card";
import { FEEDBACK_STEPS } from "../../../../helper/constants";

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
        step={FEEDBACK_STEPS.BUG_STEP}
        icon={<RiBugFill size={"50px"} color={"#3C9D93"} />}
      />
      <FeedbackCard
        step={FEEDBACK_STEPS.IDEA_STEP}
        icon={<FcIdea size={"50px"} />}
      />
      <FeedbackCard
        step={FEEDBACK_STEPS.OTHER_STEP}
        icon={<BiConversation size={"50px"} color={"orange"} />}
      />
    </Flex>
  );
};

export default StepOne;
