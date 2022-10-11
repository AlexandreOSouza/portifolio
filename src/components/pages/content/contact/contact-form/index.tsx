import { Flex, Input, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "../../../../../hooks/useForm";
import DefaultButton from "../../../../CTA/default";

const ContactForm = () => {
  const { message, name, email, setName, setEmail, setMessage, cleanForm } =
    useForm();

  const [emailSend, setEmailsend] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setEmailsend(true);
    cleanForm();
  };

  return (
    <Flex
      flexDirection={"column"}
      width={emailSend ? "100%" : { base: "80vw", lg: "350px" }}
      maxWidth={emailSend ? "100%" : { base: "300px", lg: "" }}
      mt={emailSend ? "100px" : ""}
    >
      {!emailSend ? (
        <form onSubmit={handleSubmit} method={"POST"}>
          <Text textStyle={"label"} color={"secondary.gray"}>
            _name:
          </Text>
          <Input
            name={"name"}
            type={"text"}
            isRequired
            background={"primary.midDark"}
            border={"1px solid"}
            borderColor={"lines.main"}
            mt={"10px"}
            color={"secondary.midGray"}
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            isRequired
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
            isRequired
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

          <DefaultButton width={"150px"} mt={"24px"} type={"submit"}>
            submit-message
          </DefaultButton>
        </form>
      ) : (
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Text color={"white"} fontSize={"26px"} fontWeight={"450"}>
            Thank you! 🤘
          </Text>
          <Text
            textAlign={"center"}
            fontSize={"18px"}
            fontWeight={"450"}
            color={"secondary.gray"}
            maxWidth={"400px"}
            mt={"10px"}
          >
            Your message has been accepted. You will recieve answer really soon!
          </Text>
          <DefaultButton
            width={"200px"}
            mt={"24px"}
            onClick={() => setEmailsend(false)}
          >
            submit-new-message
          </DefaultButton>
        </Flex>
      )}
    </Flex>
  );
};

export default ContactForm;
