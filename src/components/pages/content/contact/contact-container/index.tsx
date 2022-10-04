import { Flex, Input, Text, Textarea } from "@chakra-ui/react";
import { RiCloseFill } from "react-icons/ri";
import DefaultButton from "../../../../CTA/default";

const ContactContainer = () => {
  return (
    <Flex flex={1} flexDirection={"column"}>
      <Flex
        display={{ base: "none", lg: "flex" }}
        height={"45px"}
        width={"200px"}
        borderRight={"1px solid"}
        borderColor={"lines.main"}
        color={"secondary.gray"}
        justifyContent={"space-between"}
        alignItems={"center"}
        pr={"12px"}
        pl={"14px"}
      >
        <Text textStyle={"label"}>contacts</Text>
        <RiCloseFill />
      </Flex>
      <Flex flex={1} borderTop={"1px solid"} borderColor={"lines.main"}>
        <Flex
          width={"50%"}
          justifyContent={"center"}
          alignItems={"flex-start"}
          pt={"100px"}
          borderRight={"1px solid"}
          borderColor={"lines.main"}
        >
          <Flex flexDirection={"column"} width={"350px"}>
            <Text textStyle={"label"} color={"secondary.gray"}>
              _name:
            </Text>
            <Input
              name={"name"}
              type={"text"}
              background={"primary.midDark"}
              border={"1px solid"}
              borderColor={"lines.main"}
              mt={"10px"}
              color={"secondary.midGray"}
              borderRadius={"8px"}
              _focusVisible={{
                boxShadow: "0px 0px 0px 2px rgba(96, 123, 150, 0.3)",
                outline: "none",
              }}
              _hover={{
                borderColor: "lines.main",
              }}
            />

            <Text textStyle={"label"} color={"secondary.gray"} mt={"24px"}>
              _email:
            </Text>
            <Input
              name={"email"}
              type={"email"}
              background={"primary.midDark"}
              border={"1px solid"}
              borderColor={"lines.main"}
              mt={"10px"}
              color={"secondary.midGray"}
              borderRadius={"8px"}
              _focusVisible={{
                boxShadow: "0px 0px 0px 2px rgba(96, 123, 150, 0.3)",
                outline: "none",
              }}
              _hover={{
                borderColor: "lines.main",
              }}
            />

            <Text textStyle={"label"} color={"secondary.gray"} mt={"24px"}>
              _message:
            </Text>
            <Textarea
              name={"message"}
              background={"primary.midDark"}
              border={"1px solid"}
              borderColor={"lines.main"}
              mt={"10px"}
              resize={"none"}
              size={"xs"}
              color={"secondary.midGray"}
              borderRadius={"8px"}
              _focusVisible={{
                boxShadow: "0px 0px 0px 2px rgba(96, 123, 150, 0.3)",
                outline: "none",
              }}
              _hover={{
                borderColor: "lines.main",
              }}
            />

            <DefaultButton width={"150px"} mt={"24px"}>
              submit-message
            </DefaultButton>
          </Flex>
        </Flex>
        <Flex width={"50%"}></Flex>
      </Flex>
    </Flex>
  );
};

export default ContactContainer;
