import { Flex, Text } from "@chakra-ui/react";
import { RiCloseFill } from "react-icons/ri";
import FeedbackFooter from "../feedback-footer";
import FeedbackHeader from "../feedback-header";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactElement;
};

const FeedbackContainer = ({ isOpen, onClose, children }: Props) => {
  return (
    <Flex
      zIndex={2}
      opacity={isOpen ? "1" : "0"}
      position={"absolute"}
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      width={"400px"}
      height={"300px"}
      border={"1px solid"}
      borderColor={"lines.main"}
      background={"primary.blue"}
      mt={"calc(100vh - 440px)"}
      ml={"calc(100vw - 440px)"}
      borderRadius={"20px"}
      borderBottomRightRadius={"none"}
      transition={"opacity .1s linear"}
    >
      <FeedbackHeader onClose={onClose} />
      {children}
      <FeedbackFooter />
    </Flex>
  );
};

export default FeedbackContainer;
