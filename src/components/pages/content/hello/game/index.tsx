import { Flex, Image, Text } from "@chakra-ui/react";
import Arrows from "./arrows";
import Food from "./food";

const Game = () => {
  const Screw = () => {
    return (
      <Image
        src={"/assets/ellipse.png"}
        width="13px"
        height="13px"
        alt={""}
        boxShadow={"2px 2px 4px #0D4341, inset 0px 1px 2px #1A8277"}
        borderRadius={"50%"}
      />
    );
  };

  const ScrewContainer = () => {
    return (
      <>
        <Flex justifyContent={"space-between"}>
          <Screw />
          <Screw />
        </Flex>
        <Flex justifyContent={"space-between"}>
          <Screw />
          <Screw />
        </Flex>
      </>
    );
  };

  return (
    <Flex
      borderRadius={"8px"}
      backdropFilter={"blur(32px)"}
      boxShadow={"inset 0px 2px 0px rgba(255, 255, 255, 0.3);"}
      border={"1px solid #0C1616"}
      background={
        "linear-gradient(150.26deg, rgba(23, 85, 83, 0.7) 1.7%, rgba(67, 217, 173, 0.091) 81.82%)"
      }
      width={"510px"}
      height={"475px"}
      p={"13px"}
      justifyContent={"space-between"}
      flexDir={"column"}
    >
      <ScrewContainer />

      <Flex position={"absolute"} width={"94%"} height={"94%"} p={"20px"}>
        <Flex
          width={"238px"}
          height={"405px"}
          boxShadow={"inset 1px 5px 11px rgba(2, 18, 27, 0.71)"}
          background={"rgba(1, 22, 39, 0.84)"}
          borderRadius={"8px"}
        ></Flex>
        <Flex pl={"24px"} flexDirection={"column"}>
          <Flex
            borderRadius={"8px"}
            background={"rgba(1, 20, 35, 0.19)"}
            width={"181px"}
            height={"142px"}
            flexDirection={"column"}
            px={"13px"}
            pt={"15px"}
          >
            <Text textStyle={"code"}>{"// use keyboard"}</Text>
            <Text textStyle={"code"} mb={"15px"}>
              {"// arrows to play"}
            </Text>
            <Arrows />
          </Flex>
          <Flex pl={"13px"} mt={"20px"} flexDirection={"column"}>
            <Text textStyle={"code"}>{"// food left"}</Text>
            <Flex width={"140px"} flexDirection={"column"} mt={"10px"}>
              <Flex justifyContent={"space-between"}>
                <Food />
                <Food />
                <Food />
                <Food />
                <Food />
              </Flex>
              <Flex justifyContent={"space-between"} mt={"7px"}>
                <Food />
                <Food />
                <Food isLeft />
                <Food isLeft />
                <Food isLeft />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Game;
