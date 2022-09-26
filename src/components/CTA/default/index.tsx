import { ButtonProps } from "@chakra-ui/react";
import BaseCTAButton from "../base-button";

const DefaultButton = ({ children, ...props }: ButtonProps) => {
  return (
    <BaseCTAButton
      background={"default.darkBlue"}
      color={"secondary.white"}
      _hover={{
        background: "default.darkBlueHover",
      }}
      _active={{
        background: "default.darkBlueHover",
      }}
      {...props}
    >
      {children}
    </BaseCTAButton>
  );
};

export default DefaultButton;
