import { Button, ButtonProps, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";

const CofiInput = () => {
  const [amount, setAmount] = useState(1);

  const handleIncreass = () => {
    setAmount((prev) => prev + 1);
  };

  const handleDecreass = () => {
    if (amount === 1) return;
    setAmount((prev) => prev - 1);
  };

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
      <CustomButton onClick={handleDecreass}>-</CustomButton>
      <Input
        borderRadius={"20px"}
        width={"70px"}
        mx={"10px"}
        value={amount}
        disabled
        color={"white"}
        textAlign={"center"}
      />
      <CustomButton onClick={handleIncreass}>+</CustomButton>
    </Flex>
  );
};

export default CofiInput;
