import React, { createContext, useCallback, useContext, useState } from "react";
import { STEP_TYPE, FEEDBACK_TITLE } from "../helper/constants";

type Props = {
  children: React.ReactNode;
};

const PageContext = createContext({
  currentAboutSection: 1,
  setCurrentAboutSection: (currentAboutSection: number) => {},
  currentAboutContent: 1,
  setCurrentAboutContent: (currentAboutContent: number) => {},
  feedbackTitle: "",
  changeStep: (step: STEP_TYPE) => {},
  step: 0,
});

export const PageContextProvider = ({ children }: Props) => {
  const [currentAboutSection, setCurrentAboutSection] = useState(1);
  const [currentAboutContent, setCurrentAboutContent] = useState(1);
  const setCurrentAboutIndexPage = (currentPage: number) => {
    setCurrentAboutSection(currentPage);
  };

  const [step, setStep] = useState(0);
  const [feedbackTitle, setFeedbackTitle] = useState(FEEDBACK_TITLE[1]);

  const changeStep = useCallback((step: STEP_TYPE) => {
    setStep(step);
    setFeedbackTitle(FEEDBACK_TITLE[step]);
  }, []);

  return (
    <PageContext.Provider
      value={{
        currentAboutSection,
        setCurrentAboutSection: setCurrentAboutIndexPage,
        currentAboutContent,
        setCurrentAboutContent,
        feedbackTitle,
        changeStep,
        step,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export const usePage = () => {
  const context = useContext(PageContext);

  return context;
};
