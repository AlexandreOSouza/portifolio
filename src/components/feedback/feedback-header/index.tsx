import { Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { RiCloseFill } from "react-icons/ri";
import { FEEDBACK_TITLE } from "../../../helper/constants";
import { usePage } from "../../../hooks/usePages";

type Props = {
  onClose: () => void;
};

const FeedbackHeader = ({ onClose }: Props) => {
  const { feedbackTitle } = usePage();

  return (
    <Flex
      width={"100%"}
      height={"50px"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Text
        color={"lightGray"}
        fontSize={"18px"}
        ml={"auto"}
        fontWeight={"bold"}
      >
        <>{feedbackTitle}</>
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
