import { Flex, Image } from "@chakra-ui/react";

const SideBar = () => {
  const Icon = ({ src, isActive }: any) => {
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
      />
    );
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
    >
      <Icon src={"./assets/about/console.svg"} />
      <Icon src={"./assets/about/info.svg"} isActive />
      <Icon src={"./assets/about/hobbie.svg"} />
    </Flex>
  );
};

export default SideBar;
