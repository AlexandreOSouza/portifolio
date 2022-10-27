import { Button, ButtonProps, Flex, Input } from "@chakra-ui/react";

type Props = {
  amount: number;
  increass: () => void;
  decreass: () => void;
};

const CofiInput = ({ amount, increass, decreass }: Props) => {
  const CustomButton = ({ children, ...props }: ButtonProps) => {
    return (
      <Button
        borderRadius={"20px"}
        background={"accent.orange"}
        border={"1px solid lightGray"}
        _hover={{
          background: "accent.orange",
          filter: "brightness(0.9)",
        }}
        color={"white"}
        {...props}
      >
        {children}
      </Button>
    );
  };

  return (
    <Flex>
      <CustomButton onClick={decreass}>-</CustomButton>
      <Input
        borderRadius={"20px"}
        width={"70px"}
        mx={"10px"}
        value={amount}
        disabled
        color={"white"}
        textAlign={"center"}
      />
      <CustomButton onClick={increass}>+</CustomButton>
    </Flex>
  );
};

export default CofiInput;
