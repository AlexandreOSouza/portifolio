import React, { createContext, useContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const PageContext = createContext({
  currentAboutSection: 1,
  setCurrentAboutSection: (currentAboutSection: number) => {},
  currentAboutContent: 1,
  setCurrentAboutContent: (currentAboutContent: number) => {},
});

export const PageContextProvider = ({ children }: Props) => {
  const [currentAboutSection, setCurrentAboutSection] = useState(1);
  const [currentAboutContent, setCurrentAboutContent] = useState(1);
  const setCurrentAboutIndexPage = (currentPage: number) => {
    setCurrentAboutSection(currentPage);
  };

  return (
    <PageContext.Provider
      value={{
        currentAboutSection,
        setCurrentAboutSection: setCurrentAboutIndexPage,
        currentAboutContent,
        setCurrentAboutContent,
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
