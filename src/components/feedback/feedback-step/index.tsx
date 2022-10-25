import { useMemo } from "react";
import { FEEDBACK_STEPS } from "../../../helper/constants";
import { usePage } from "../../../hooks/usePages";
import BugStep from "./bug-step";
import BuyAKofiStep from "./buy-step";
import IdeaStep from "./idea-step";
import StepOne from "./step-one";

type Props = {
  isOpen: boolean;
};

const FeedbackStep = ({ isOpen }: Props) => {
  const { step } = usePage();
  const RenderStep = useMemo(() => {
    if (step === FEEDBACK_STEPS.INITIAL_STEP) {
      return <StepOne />;
    } else if (step === FEEDBACK_STEPS.BUG_STEP) {
      return <BugStep />;
    } else if (step === FEEDBACK_STEPS.IDEA_STEP) {
      return <IdeaStep />;
    } else {
      return <BuyAKofiStep />;
    }
  }, [step]);
  return isOpen ? <>{RenderStep}</> : <></>;
};

export default FeedbackStep;
