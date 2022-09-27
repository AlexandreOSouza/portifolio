import { Button, ButtonProps } from "@chakra-ui/react";

const DrawerButton = ({ children, ...props }: ButtonProps) => {
  return (
    <Button
      height={"55px"}
      width={"100%"}
      borderRadius={0}
      background={"transparent"}
      fontSize={"16px"}
      color={"secondary.white"}
      lineHeight={"20px"}
      fontWeight={"400"}
      borderColor={"secondary.gray"}
      borderBottomWidth={"1px"}
      borderBottomColor={"lines.main"}
      justifyContent={"flex-start"}
      pl={"18px"}
      _hover={{
        background: "primary.mid",
      }}
      _active={{
        color: "secondary.white",
        borderBottom: "2px solid",
        borderBottomColor: "accent.orange",
        background: "primary.mid",
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default DrawerButton;
