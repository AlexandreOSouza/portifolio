import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useMemo } from "react";
import { BiConversation } from "react-icons/bi";
import { FcIdea } from "react-icons/fc";
import { RiArrowLeftLine, RiBugFill, RiCloseFill } from "react-icons/ri";
import { FEEDBACK_STEPS, FEEDBACK_TITLE } from "../../../helper/constants";
import { usePage } from "../../../hooks/usePages";

type Props = {
  onClose: () => void;
};

const FeedbackHeader = ({ onClose }: Props) => {
  const { feedbackTitle, step, changeStep } = usePage();

  const RenderIcon = useMemo(() => {
    if (step === FEEDBACK_STEPS.BUG_STEP) {
      return <RiBugFill color={"#303fb8"} size={"25px"} />;
    } else if (step === FEEDBACK_STEPS.IDEA_STEP) {
      return <FcIdea size={"25px"} />;
    } else if (step === FEEDBACK_STEPS.OTHER_STEP) {
      return <BiConversation size={"25px"} color={"orange"} />;
    }
  }, [step]);

  return (
    <Flex
      width={"100%"}
      height={"50px"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {step !== FEEDBACK_STEPS.INITIAL_STEP && (
        <Flex ml={"10px"}>
          <RiArrowLeftLine
            fontSize={"24px"}
            onClick={() => changeStep(1)}
            cursor={"pointer"}
            color={"lightGray"}
          />
        </Flex>
      )}
      <Flex
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        columnGap={"10px"}
      >
        {RenderIcon}
        <Text color={"lightGray"} fontSize={"18px"} fontWeight={"bold"}>
          <>{feedbackTitle}</>
        </Text>
      </Flex>
      <Flex ml={"auto"} mr={"10px"}>
        <RiCloseFill
          fontSize={"24px"}
          onClick={onClose}
          cursor={"pointer"}
          color={"lightGray"}
        />
      </Flex>
    </Flex>
  );
};

export default FeedbackHeader;
