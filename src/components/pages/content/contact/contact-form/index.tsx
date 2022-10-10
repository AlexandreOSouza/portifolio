import { Flex, Input, Text, Textarea } from "@chakra-ui/react";
import { useForm } from "../../../../../hooks/useForm";
import DefaultButton from "../../../../CTA/default";

const ContactForm = () => {
  const { message, name, email, setName, setEmail, setMessage } = useForm();

  return (
    <Flex
      flexDirection={"column"}
      width={{ base: "80vw", lg: "350px" }}
      maxWidth={{ base: "300px", lg: "" }}
    >
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
        value={name}
        onChange={(e) => setName(e.target.value as any)}
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
        value={email}
        onChange={(e) => setEmail(e.target.value as any)}
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
        value={message}
        onChange={(e) => setMessage(e.target.value as any)}
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
  );
};

export default ContactForm;
