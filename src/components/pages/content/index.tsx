import { Flex } from "@chakra-ui/react";
import { useMemo } from "react";
import { PAGE_INDEX } from "../../../helper/constants";
import { usePage } from "../../../hooks/usePages";
import AboutMeContent from "./about";
import ContactContent from "./contact";
import HelloContent from "./hello";
import ProjectsContent from "./projects";

const MainContent = () => {
  const { currentPage } = usePage();

  const renderContent = useMemo(() => {
    if (currentPage === PAGE_INDEX.ABOUT) {
      return <AboutMeContent />;
    } else if (currentPage === PAGE_INDEX.HOME) {
      return <HelloContent />;
    } else if (currentPage === PAGE_INDEX.PROJECTS) {
      return <ProjectsContent />;
    } else if (currentPage === PAGE_INDEX.CONTACT) {
      return <ContactContent />;
    }
    return <></>;
  }, [currentPage]);

  return (
    <Flex flex={1} p={0} m={0}>
      {renderContent}
    </Flex>
  );
};

export default MainContent;
