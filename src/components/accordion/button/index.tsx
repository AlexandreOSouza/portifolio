import { AccordionButton, Text } from "@chakra-ui/react";
import { RiArrowDownSFill, RiArrowRightSFill } from "react-icons/ri";

type Props = {
  isExpanded: boolean;
  title: string;
};

const AccordionCustomButton = ({ isExpanded, title }: Props) => {
  return (
    <Text textStyle={"label"} color={"white"}>
      <AccordionButton
        width={{ base: "100vw", lg: "242px" }}
        height={"46px"}
        borderBottom={"1px solid"}
        borderColor={"lines.main"}
        columnGap={"10px"}
        background={{ base: "lines.main", lg: "primary.mid" }}
        _active={{
          background: { base: "lines.main", lg: "primary.mid" },
        }}
        _hover={{
          background: { base: "lines.main", lg: "primary.mid" },
        }}
      >
        {isExpanded ? <RiArrowRightSFill /> : <RiArrowDownSFill />}
        {title}
      </AccordionButton>
    </Text>
  );
};

export default AccordionCustomButton;
