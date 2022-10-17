import { Flex, Text } from "@chakra-ui/react";
import { ReactElement } from "react";
import { IconType } from "react-icons";
import { RiArrowDropRightFill, RiMarkdownFill } from "react-icons/ri";
import { usePage } from "../../../../../../hooks/usePages";

type Props = {
  title: any;
  icon: ReactElement;
  contentIndex: number;
};

const Item = ({ title, icon, contentIndex }: Props) => {
  const { currentAboutContent, setCurrentAboutContent } = usePage();

  const isActive = currentAboutContent === contentIndex;
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
      onClick={() => setCurrentAboutContent(contentIndex)}
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
