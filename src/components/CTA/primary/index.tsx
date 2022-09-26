import { ButtonProps } from "@chakra-ui/react";
import BaseCTAButton from "../base-button";

const PrimaryButton = ({ children, ...props }: ButtonProps) => {
  return (
    <BaseCTAButton
      background={"accent.orange"}
      color={"primary.dark"}
      fontSize={"14px"}
      lineHeight={"18.37px"}
      _hover={{
        background: "accent.orangeHover",
      }}
      _active={{
        background: "accent.orangeHover",
      }}
      {...props}
    >
      {children}
    </BaseCTAButton>
  );
};

export default PrimaryButton;
