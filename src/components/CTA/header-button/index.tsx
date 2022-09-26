import { Button, ButtonProps } from "@chakra-ui/react";
import { useMemo } from "react";

type Props = ButtonProps & {
  isLastItem?: boolean;
};

const HeaderButton = ({ children, isLastItem = false, ...props }: Props) => {
  const moreProps = useMemo(() => {
    if (isLastItem) {
      return {
        borderRightWidth: "1px",
        borderRightColor: "lines.main",
      };
    }
    return {};
  }, [isLastItem]);
  return (
    <Button
      height={"56px"}
      borderRadius={0}
      background={"transparent"}
      fontSize={"16px"}
      color={"secondary.gray"}
      lineHeight={"20px"}
      fontWeight={"400"}
      borderColor={"secondary.gray"}
      borderLeftWidth={"1px"}
      borderLeftColor={"lines.main"}
      px={"31px"}
      _hover={{
        background: "transparent",
        borderBottom: "1px solid",
        borderBottomColor: "secondary.gray",
      }}
      _active={{
        color: "secondary.white",
        borderBottom: "2px solid",
        borderBottomColor: "accent.orange",
      }}
      {...props}
      {...moreProps}
    >
      {children}
    </Button>
  );
};

export default HeaderButton;
