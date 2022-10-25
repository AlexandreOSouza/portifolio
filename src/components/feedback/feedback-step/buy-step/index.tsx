import { Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { RiCupFill } from "react-icons/ri";
import CofiInput from "./coffee-input";

const BuyAKofiStep = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <Flex
      width={"100%"}
      flex={1}
      p={"10px"}
      pb={"40px"}
      flexDire={"column"}
      alignItems={isClicked ? "flex-start" : "center"}
      justifyContent={"center"}
    >
      {isClicked ? (
        <Flex height={"100%"} flex={1} flexDirection={"column"}>
          <Flex
            height={"50px"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Flex alignItems={"center"}>
              <RiCupFill color={"#FEA55F"} size={"40px"} />
              <Text color={"lightGray"} fontWeight={"bold"} ml={"10px"}>
                0.005 eth
              </Text>
            </Flex>
            <CofiInput />
          </Flex>
        </Flex>
      ) : (
        <Button
          background={"accent.orange"}
          _hover={{ background: "accent.orange", filter: "brightness(0.9)" }}
          onClick={handleClick}
        >
          Connect your wallet
        </Button>
      )}
    </Flex>
  );
};

export default BuyAKofiStep;
