import { Flex, Image, Text } from "@chakra-ui/react";
import Head from "next/head";
import { PAGE_TITLE } from "../../../../helper/constants";
import MainContent from "./content";
import Game from "./game";

import Spline from "@splinetool/react-spline";
import Arrows from "./game/arrows";

const Splice3D = () => {
  return (
    <>
      <Spline scene="https://prod.spline.design/5FIwBK7yHxmVsu1I/scene.splinecode" />
    </>
  );
};

const HelloContent = () => {
  return (
    <>
      <Head>
        <title>{PAGE_TITLE.HOME}</title>
      </Head>
      <Flex flex={1}>
        <Flex
          justifyContent={"flex-start"}
          flexDirection={"row"}
          alignItems={{ base: "center", lg: "center" }}
          pr={{ base: "20px", lg: "50px" }}
          pl={{ base: "20px", lg: "40px" }}
          minW={"100vw"}
          zIndex={100}
        >
          <MainContent />
          <Flex
            borderRadius={"8px"}
            background={"rgba(1, 20, 35, 0.19)"}
            width={"181px"}
            height={"142px"}
            display={{ base: "none", lg: "flex" }}
            flexDirection={"column"}
            px={"13px"}
            pt={"15px"}
            ml={"20vw"}
          >
            <Text textStyle={"code"}>{"// use keyboard"}</Text>
            <Text textStyle={"code"} mb={"15px"}>
              {"// arrows to play"}
            </Text>
            <Arrows />
          </Flex>
        </Flex>
        <Flex
          display={{ base: "none", lg: "flex" }}
          flex={1}
          alignItems={"center"}
          pr={"40px"}
          // maxWidth={"50vw"}
          position="absolute"
          height={"100vh"}
          width={"100vw"}
        >
          <Splice3D />
        </Flex>
      </Flex>
    </>
  );
};

export default HelloContent;
