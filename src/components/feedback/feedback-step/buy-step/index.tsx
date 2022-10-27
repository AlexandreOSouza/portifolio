import { Button, Flex, Input, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { RiCupFill } from "react-icons/ri";
import CofiInput from "./coffee-input";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

const BuyAKofiStep = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [amount, setAmount] = useState(1);
  const [usrAddr, setUsrAddr] = useState<string>();
  const [signer, setSigner] = useState<any>();
  const price = 0.005;

  const handleClick = async () => {
    if (!usrAddr) {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signert = provider.getSigner();
      setSigner(signert);
      const address = await signert.getAddress();
      setUsrAddr(shortAddress(address));
    }
    setIsClicked(true);
  };

  const handleIncreass = () => {
    setAmount((prev) => prev + 1);
  };

  const handleDecreass = () => {
    if (amount === 1) return;
    setAmount((prev) => prev - 1);
  };

  const handleSupport = async () => {
    if (signer) {
      try {
        const tx = await signer.sendTransaction({
          to: "0x89795cC75Bab93b562A673b8FbD9c32E2eaD2BdD",
          value: ethers.utils.parseEther(`${price * amount}`),
        });

        console.log(tx);
      } catch (e: any) {
        alert("Something wrong happens ☹️!");
      }
    }
  };

  const shortAddress = (address: string) => {
    const f = address.slice(0, 4);
    const e = address.slice(-4, address.length);

    return `${f}...${e}`;
  };

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
            Your wallet address: {usrAddr}
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
