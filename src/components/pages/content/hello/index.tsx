import { Flex, Image, Text } from "@chakra-ui/react";
import Head from "next/head";
import { PAGE_TITLE } from "../../../../helper/constants";
import MainContent from "./content";
import Game from "./game";

const HelloContent = () => {
  return (
    <>
      <Head>
        <title>{PAGE_TITLE.HOME}</title>
      </Head>
      <Flex flex={1}>
        <Flex
          flex={1}
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems={{ base: "center", lg: "flex-end" }}
          pr={{ base: "20px", lg: "50px" }}
          pl={{ base: "20px", lg: "40px" }}
          minW={"55vw"}
        >
          <MainContent />
        </Flex>
        <Flex
          display={{ base: "none", lg: "flex" }}
          flex={1}
          alignItems={"center"}
          pr={"40px"}
          maxWidth={"50vw"}
        >
          <Game />
        </Flex>
      </Flex>
    </>
  );
};

export default HelloContent;
