import { ButtonProps } from "@chakra-ui/react";
import BaseCTAButton from "../base-button";

const GhostButton = ({ children, ...props }: ButtonProps) => {
  return (
    <BaseCTAButton
      background={"primary.dark"}
      color={"secondary.white"}
      border={"1px solid white"}
      _hover={{
        background: "primary.dark",
        border: "1px solid rgba(255,255,255,0.7)",
      }}
      _active={{
        background: "primary.dark",
      }}
      {...props}
    >
      {children}
    </BaseCTAButton>
  );
};

export default GhostButton;
