import { useMemo } from "react";
import { FEEDBACK_STEPS } from "../../../helper/constants";
import { usePage } from "../../../hooks/usePages";
import BugStep from "./bug-step";
import StepOne from "./step-one";

const FeedbackStep = () => {
  const { step } = usePage();
  const RenderStep = useMemo(() => {
    if (step === FEEDBACK_STEPS.INITIAL_STEP) {
      return <StepOne />;
    } else if (step === FEEDBACK_STEPS.BUG_STEP) {
      return <BugStep />;
    }
  }, [step]);
  return <>{RenderStep}</>;
};

export default FeedbackStep;
