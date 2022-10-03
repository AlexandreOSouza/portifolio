import { Flex, Text } from "@chakra-ui/react";
import { ReactElement } from "react";
import { IconType } from "react-icons";
import { RiArrowDropRightFill, RiMarkdownFill } from "react-icons/ri";

type Props = {
  title: any;
  icon: ReactElement;
  onClick?: () => void;
  isActive?: boolean;
};

const Item = ({ title, icon, onClick, isActive = false }: Props) => {
  return (
    <Flex
      alignItems={"center"}
      color={"secondary.gray"}
      mt={"10px"}
      pl={"5px"}
      filter={isActive ? "none" : "brightness(0.5)"}
      _hover={{
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <>
        {icon}
        <Text ml={"10px"} fontSize={"12px"}>
          {title}
        </Text>
      </>
    </Flex>
  );
};

export default Item;
