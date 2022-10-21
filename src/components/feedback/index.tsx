import { useEffect, useState } from "react";
import FeedbackButton from "../CTA/feedback";
import FeedbackContainer from "./feedback-container";
import FeedbackStep from "./feedback-step";

const Feedback = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <FeedbackContainer isOpen={true} onClose={() => setIsOpen(false)}>
        <FeedbackStep />
      </FeedbackContainer>
      <FeedbackButton onClick={() => setIsOpen((prev) => !prev)} />
    </>
  );
};

export default Feedback;
