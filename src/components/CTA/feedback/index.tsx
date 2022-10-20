import {
  ButtonProps,
  Collapse,
  Fade,
  Flex,
  Slide,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { RiChatSmile3Line } from "react-icons/ri";
import BaseCTAButton from "../base-button";

const Feedback = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <Flex
        // display={isOpenModal ? "flex" : "none"}
        opacity={isOpenModal ? "1" : "0"}
        position={"absolute"}
        direction="column"
        alignItems="center"
        justifyContent="center"
        width={"400px"}
        height={"300px"}
        border={"1px solid"}
        borderColor={"lines.main"}
        background={"primary.dark"}
        mt={"calc(100vh - 440px)"}
        ml={"calc(100vw - 440px)"}
        borderRadius={"20px"}
        borderBottomRightRadius={"none"}
        transition={"opacity .1s linear"}
      ></Flex>
      <Flex
        position={"absolute"}
        display={"flex"}
        flexDirection={"row-reverse"}
        zIndex={2}
        mt={"calc(100vh - 120px)"}
        ml={"calc(100vw - 190px)"}
        width={"150px"}
      >
        <BaseCTAButton
          width={"50px"}
          height={"50px"}
          borderRadius={"40px"}
          background={"primary.blue"}
          border={"1px solid"}
          borderColor={"gray"}
          transition={"width 0.3s"}
          overflow={"hidden"}
          onMouseEnter={onToggle}
          onMouseLeave={onToggle}
          _hover={{
            backgroundColor: "primary.blue",
            width: "150px",
          }}
          _active={{
            backgroundColor: "primary.blue",
            filter: "brightness(0.9)",
          }}
          onClick={() => {
            setIsOpenModal((prev) => !prev);
          }}
        >
          <>
            <RiChatSmile3Line fontSize={"20px"} color={"lightGray"} />
            <Text
              color={"lightGray"}
              fontSize={"20px"}
              display={isOpen ? "flex" : "none"}
            >
              Feedback
            </Text>
          </>
        </BaseCTAButton>
      </Flex>
    </>
  );
};

export default Feedback;
