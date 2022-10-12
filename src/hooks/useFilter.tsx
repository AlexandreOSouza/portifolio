import React, { createContext, useContext, useState } from "react";
import { ProjectProps, PROJECTS } from "../helper/constants";

type Props = {
  children: React.ReactNode;
};

type ContextProps = {
  projects: ProjectProps[];
};

const FilterContext = createContext<ContextProps>({
  projects: [],
});

export const FilterContextProvider = ({ children }: Props) => {
  return (
    <FilterContext.Provider
      value={{
        projects: PROJECTS,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);

  return context;
};
