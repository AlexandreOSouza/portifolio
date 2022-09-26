import { Button, ButtonProps } from "@chakra-ui/react";

type Props = ButtonProps & {
  children: any;
};

const BaseCTAButton = ({ children, ...props }: Props) => {
  return (
    <Button
      borderRadius={"0.5em"}
      width={"112px"}
      height={"38px"}
      px={"10px"}
      py={"14px"}
      fontWeight={"450"}
      fontStyle={"normal"}
      {...props}
    >
      {children}
    </Button>
  );
};

export default BaseCTAButton;
