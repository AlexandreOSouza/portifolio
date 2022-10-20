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

type Props = {
  onClick: () => void;
};

const FeedbackButton = ({ onClick }: Props) => {
  const { isOpen, onToggle } = useDisclosure();
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
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
          onClick={onClick}
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

export default FeedbackButton;
