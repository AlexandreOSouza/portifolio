import React from "react";
import { Flex, Text } from "@chakra-ui/react";

type Props = {
  title: string;
  icon: React.ReactElement;
};

const FeedbackCard = ({ title, icon }: Props) => {
  return (
    <Flex
      flexDirection={"column"}
      bg="#edf3f8"
      background={"primary.blueDark"}
      height={"150px"}
      width={"100%"}
      borderRadius={"15px"}
      alignItems={"center"}
      justifyContent={"center"}
      cursor={"pointer"}
      _hover={{
        border: "2px solid lightGray",
      }}
    >
      {icon}
      <Text color={"lightgray"} fontWeight={"bold"}>
        {title}
      </Text>
    </Flex>
  );
};

export default FeedbackCard;
