import { Flex } from "@chakra-ui/react";
import { useMemo } from "react";
import { PAGE_INDEX, PAGE_URL } from "../../../helper/constants";
import { usePage } from "../../../hooks/usePages";
import AboutMeContent from "./about";
import ContactContent from "./contact";
import HelloContent from "./hello";
import ProjectsContent from "./projects";

type Props = {
  page: string;
};

const MainContent = ({ page }: Props) => {
  const renderContent = useMemo(() => {
    if (page === PAGE_URL[2]) {
      return <AboutMeContent />;
    } else if (page === PAGE_URL[1]) {
      return <HelloContent />;
    } else if (page === PAGE_URL[3]) {
      return <ProjectsContent />;
    } else if (page === PAGE_URL[4]) {
      return <ContactContent />;
    }
    return <></>;
  }, [page]);

  return (
    <Flex p={0} m={0} height={"calc(100vh - 106px)"}>
      {renderContent}
    </Flex>
  );
};

export default MainContent;
