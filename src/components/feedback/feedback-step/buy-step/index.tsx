import { Button, Flex, Input, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { RiCupFill } from "react-icons/ri";
import CofiInput from "./coffee-input";

const BuyAKofiStep = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [amount, setAmount] = useState(1);
  const price = 0.005;

  const usrAddr = "0x89795cC75Bab93b562A673b8FbD9c32E2eaD2BdD";

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  const handleIncreass = () => {
    setAmount((prev) => prev + 1);
  };

  const handleDecreass = () => {
    if (amount === 1) return;
    setAmount((prev) => prev - 1);
  };

  const handleSupport = () => {
    alert("sending...");
  };

  const shortUserAddr = () => {
    const first = usrAddr.slice(0, 4);
    const last = usrAddr.slice(-4, usrAddr.length);
    const shorter = `${first}...${last}`;
    return shorter;
  };

  const address = shortUserAddr();

  return (
    <Flex
      width={"100%"}
      flex={1}
      p={"10px"}
      pb={"40px"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {isClicked ? (
        <Flex flex={1} flexDirection={"column"}>
          <Text color={"white"} fontWeight={"bold"}>
            Your wallet address: {address}
          </Text>
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            mt={"25px"}
          >
            <Flex alignItems={"center"}>
              <RiCupFill color={"#FEA55F"} size={"40px"} />
              <Text color={"lightGray"} fontWeight={"bold"} ml={"10px"}>
                {price} eth
              </Text>
            </Flex>
            <CofiInput
              amount={amount}
              increass={handleIncreass}
              decreass={handleDecreass}
            />
          </Flex>
          <Input
            mt={"10px"}
            disabled
            value={`${price * amount} eth`}
            color={"white"}
            borderRadius={"20px"}
          />
          <Button
            borderRadius={"20px"}
            background={"accent.orange"}
            color={"white"}
            mt={"10px"}
            _hover={{
              background: "accent.orange",
              filter: "brightness(0.9)",
            }}
            onClick={handleSupport}
          >
            Support {price * amount} eth
          </Button>
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
