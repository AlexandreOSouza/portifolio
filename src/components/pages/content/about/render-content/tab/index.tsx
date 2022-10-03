import { Tab, Flex, Text } from "@chakra-ui/react";
import { RiCloseFill } from "react-icons/ri";

type Props = {
  title: string;
};

const CustomTab = ({ title }: Props) => {
  return (
    <Tab
      borderRight={"1px solid"}
      borderColor={"lines.main"}
      color={"secondary.gray"}
      _active={{
        background: "",
      }}
      _selected={{
        borderBottom: "1px solid",
        borderBottomColor: "#FEA55F",
        color: "white",
      }}
    >
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        columnGap={"50px"}
        height={"27px"}
        border={"none"}
      >
        <Text>{title}</Text>
        <RiCloseFill />
      </Flex>
    </Tab>
  );
};

export default CustomTab;
