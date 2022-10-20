import { Flex, Text } from "@chakra-ui/react";
import { RiCloseFill } from "react-icons/ri";

type Props = {
  onClose: () => void;
};

const FeedbackHeader = ({ onClose }: Props) => {
  return (
    <Flex
      width={"100%"}
      height={"50px"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Text color={"lightGray"} fontSize={"18px"} ml={"auto"}>
        Send Your Feedback
      </Text>
      <Flex ml={"auto"} mr={"10px"}>
        <RiCloseFill
          fontSize={"24px"}
          onClick={onClose}
          cursor={"pointer"}
          color={"lightGray"}
        />
      </Flex>
    </Flex>
  );
};

export default FeedbackHeader;
