import _ from "lodash";
import React, { createContext, useContext, useEffect, useState } from "react";
import { ProjectProps, PROJECTS, ProjectsFilters } from "../helper/constants";

type Props = {
  children: React.ReactNode;
};

type ContextProps = {
  projects: ProjectProps[];
  updateFilterList: (name: string) => void;
  filterList: string[];
  cleanFilters: () => void;
};

const FilterContext = createContext<ContextProps>({
  projects: [],
  updateFilterList: (name: string) => {},
  filterList: [],
  cleanFilters: () => {},
});

export const FilterContextProvider = ({ children }: Props) => {
  const [projects, setProjects] = useState(PROJECTS);
  const [filterList, setFilterList] = useState<string[]>([]);

  const updateFilterList = (name: string) => {
    name = name.toLowerCase();
    if (filterList.includes(name)) {
      setFilterList(filterList.filter((e) => e != name));
    } else {
      setFilterList([...filterList, name]);
    }
  };

  const cleanFilters = () => {
    setProjects(PROJECTS);
    setFilterList([]);
  };

  useEffect(() => {
    if (filterList.length > 0) {
      const filteredProjects = _.flatten(
        _.map(filterList, function (item) {
          return _.filter(PROJECTS, item);
        })
      );
      const uniq = _.uniqBy(filteredProjects, (e) => e.id);
      const orderProjects = _.orderBy(uniq, "id", "asc");
      setProjects(orderProjects);
    } else {
      setProjects(PROJECTS);
    }
  }, [filterList]);

  return (
    <FilterContext.Provider
      value={{
        projects: projects,
        updateFilterList,
        filterList,
        cleanFilters,
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
