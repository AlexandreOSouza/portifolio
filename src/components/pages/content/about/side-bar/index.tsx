import { Flex, Image } from "@chakra-ui/react";
import { ABOUT_INDEX } from "../../../../../helper/constants";
import { usePage } from "../../../../../hooks/usePages";

const SideBar = () => {
  const { currentAboutSection, setCurrentAboutSection } = usePage();

  const Icon = ({ src, isActive, onClick }: any) => {
    return (
      <Image
        src={src}
        width={"20px"}
        height={"18px"}
        alt={"console"}
        filter={isActive ? "brightness(1)" : "brightness(0.6)"}
        _hover={{
          cursor: "pointer",
          marginRight: "2px",
        }}
        onClick={onClick}
      />
    );
  };

  const handleClick = (index: number) => {
    setCurrentAboutSection(index);
  };

  return (
    <Flex
      height={"100%"}
      width={"68px"}
      borderRight={"1px solid"}
      borderColor={"lines.main"}
      flexDirection={"column"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      rowGap={"38px"}
      pt={"25px"}
      display={{ base: "none", lg: "flex" }}
    >
      <Icon
        src={"./assets/about/console.svg"}
        isActive={currentAboutSection === ABOUT_INDEX.PROFESSIONAL}
        onClick={() => handleClick(ABOUT_INDEX.PROFESSIONAL)}
      />
    </Flex>
  );
};

export default SideBar;
