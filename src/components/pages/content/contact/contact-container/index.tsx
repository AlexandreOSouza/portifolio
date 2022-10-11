import { Flex, Input, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import DefaultButton from "../../../../CTA/default";
import CodeSnippet from "../code-snippet";
import ContactForm from "../contact-form";

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
          width={{ base: "100%", lg: "40%" }}
          justifyContent={"center"}
          alignItems={{ base: "center", lg: "flex-start" }}
          pt={{ base: "0", lg: "100px" }}
          borderRight={"1px solid"}
          borderColor={"lines.main"}
          minWidth={{ base: "100vw", lg: "450px" }}
        >
          <ContactForm />
        </Flex>
        <Flex
          width={"55%"}
          justifyContent={"center"}
          pt={"100px"}
          display={{ base: "none", lg: "flex" }}
          minWidth={"450px"}
          pl={"50px"}
        >
          <CodeSnippet />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ContactContainer;
