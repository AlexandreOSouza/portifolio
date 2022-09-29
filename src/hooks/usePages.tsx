import React, { createContext, useContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const PageContext = createContext({
  currentPage: 1,
  setCurrentPage: (currentPage: number) => {},
  currentAboutSection: 1,
  setCurrentAboutSection: (currentAboutSection: number) => {},
});

export const PageContextProvider = ({ children }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentAboutSection, setCurrentAboutSection] = useState(1);

  const setCurrentIndexPage = (currentPage: number) => {
    setCurrentPage(currentPage);
  };
  const setCurrentAboutIndexPage = (currentPage: number) => {
    setCurrentAboutSection(currentPage);
  };

  return (
    <PageContext.Provider
      value={{
        currentPage,
        setCurrentPage: setCurrentIndexPage,
        currentAboutSection,
        setCurrentAboutSection: setCurrentAboutIndexPage,
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
