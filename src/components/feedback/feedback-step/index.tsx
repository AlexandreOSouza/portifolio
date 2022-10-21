import { useMemo } from "react";
import { FEEDBACK_STEPS } from "../../../helper/constants";
import { usePage } from "../../../hooks/usePages";
import BugStep from "./bug-step";
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
    }
  }, [step]);
  return isOpen ? <>{RenderStep}</> : <></>;
};

export default FeedbackStep;
