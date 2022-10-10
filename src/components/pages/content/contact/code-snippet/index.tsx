import { Flex, Text } from "@chakra-ui/react";

type Props = {
  name: string;
  email: string;
  message: string;
};

const CodeSnippet = ({ name, email, message }: Props) => {
  const PinkText = ({ children }: any) => {
    return (
      <Text color={"accent.purple"}>
        <pre>{children}</pre>
      </Text>
    );
  };

  const PurpleText = ({ children }: any) => {
    return (
      <Text color={"primary.blue"}>
        <pre>{children}</pre>
      </Text>
    );
  };

  const OrangeText = ({ children }: any) => {
    return (
      <Text color={"accent.orange"} maxWidth={"250px"} wordBreak={"break-all"}>
        <pre>{children}</pre>
      </Text>
    );
  };

  const GrayText = ({ children }: any) => {
    return (
      <Text color={"secondary.gray"}>
        <pre>{children}</pre>
      </Text>
    );
  };

  const CodeLine = ({
    lineNumber,
    constText,
    variable,
    equals,
    fistCommand,
    parameter,
    lastCommand,
  }: any) => {
    return (
      <Text
        fontSize={{ lg: "14px", xl: "18px" }}
        lineHeight={"27px"}
        display={"flex"}
      >
        {lineNumber && <GrayText>{lineNumber}&nbsp;&nbsp;&nbsp;</GrayText>}
        {constText && <PinkText>{constText}&nbsp;</PinkText>}
        {variable && <PurpleText>{variable}&nbsp;</PurpleText>}
        {equals && <GrayText>{equals}&nbsp;</GrayText>}
        {fistCommand && <PurpleText>{fistCommand}</PurpleText>}
        {parameter && <OrangeText>{parameter}</OrangeText>}
        {lastCommand && <PurpleText>{lastCommand}</PurpleText>}
      </Text>
    );
  };

  const ButtonCode = () => {
    return (
      <CodeLine
        lineNumber={1}
        constText={"const"}
        variable={"button"}
        equals={"="}
        fistCommand={`document.querySelector(`}
        parameter={`'#sendBtn'`}
        lastCommand={");"}
      />
    );
  };

  const MessageCode = () => {
    return (
      <>
        <CodeLine
          lineNumber={3}
          constText={"const"}
          variable={"message"}
          equals={"="}
          fistCommand={`{`}
        />
        <CodeLine
          lineNumber={4}
          constText={"   name: "}
          parameter={`"${name}"`}
          lastCommand={","}
        />
        <CodeLine
          lineNumber={5}
          constText={"   email: "}
          parameter={`"${email}"`}
          lastCommand={","}
        />
        <CodeLine
          lineNumber={6}
          constText={"   message: "}
          parameter={`"${message}"`}
          lastCommand={","}
        />
        <CodeLine
          lineNumber={7}
          constText={"   date: "}
          parameter={`"Thu 21 Apr"`}
        />
        <CodeLine lineNumber={8} fistCommand={`}`} />
      </>
    );
  };

  const EventListenerCode = () => {
    return (
      <>
        <CodeLine
          lineNumber={10}
          fistCommand={`button.addEventListener(`}
          parameter={"'click'"}
          lastCommand={", () => {"}
        />
        <CodeLine
          lineNumber={12}
          fistCommand={`   form.send(`}
          parameter={"message"}
          lastCommand={");"}
        />
        <CodeLine lineNumber={13} fistCommand={`})`} />
      </>
    );
  };

  return (
    <Flex flexDirection={"column"}>
      <ButtonCode />
      <CodeLine lineNumber={2} />
      <MessageCode />
      <CodeLine lineNumber={9} />
      <EventListenerCode />
    </Flex>
  );
};

export default CodeSnippet;
