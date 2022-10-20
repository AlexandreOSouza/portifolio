import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FEEDBACK_TITLE, STEP_TYPE } from "../../helper/constants";
import FeedbackButton from "../CTA/feedback";
import FeedbackContainer from "./feedback-container";
import FeedbackStep from "./feedback-step";

const Feedback = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [step, setStep] = useState(0);
  const [feedbackTitle, setFeedbackTitle] = useState(FEEDBACK_TITLE[1]);

  const changeStep = (step: STEP_TYPE) => {
    setStep(step);
    console.log(FEEDBACK_TITLE[step], "aaaaa");
    setFeedbackTitle(FEEDBACK_TITLE[step]);
  };

  return (
    <>
      <FeedbackContainer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <FeedbackStep />
      </FeedbackContainer>
      <FeedbackButton onClick={() => setIsOpen((prev) => !prev)} />
    </>
  );
};

export default Feedback;
