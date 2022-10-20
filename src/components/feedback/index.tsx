import { Text } from "@chakra-ui/react";
import { useState } from "react";
import FeedbackButton from "../CTA/feedback";
import FeedbackContainer from "./feedback-container";

const Feedback = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <FeedbackContainer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Text></Text>
      </FeedbackContainer>
      <FeedbackButton onClick={() => setIsOpen((prev) => !prev)} />
    </>
  );
};

export default Feedback;
