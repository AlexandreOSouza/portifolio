import { ButtonProps } from "@chakra-ui/react";
import { RiChatSmile3Line } from "react-icons/ri";
import BaseCTAButton from "../base-button";

const Feedback = () => {
  return (
    <BaseCTAButton
      width={"50px"}
      height={"50px"}
      position={"fixed"}
      zIndex={2}
      borderRadius={"100%"}
      mt={"calc(100vh - 120px)"}
      ml={"calc(100vw - 90px)"}
      background={"primary.blue"}
      border={"1px solid"}
      borderColor={"gray"}
      _hover={{
        backgroundColor: "primary.blue",
        filter: "brightness(0.9)",
      }}
      _active={{
        backgroundColor: "primary.blue",
      }}
    >
      <RiChatSmile3Line fontSize={"20px"} color={"lightGray"} />
    </BaseCTAButton>
  );
};

export default Feedback;
