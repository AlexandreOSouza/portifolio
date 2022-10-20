import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import FeedbackButton from "../CTA/feedback";
import FeedbackContainer from "./feedback-container";
import FeedbackStep from "./feedback-step";

const Feedback = () => {
  const [isOpen, setIsOpen] = useState(false);

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
