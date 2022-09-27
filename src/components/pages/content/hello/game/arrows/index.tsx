import { Flex, Image } from "@chakra-ui/react";

const Arrows = () => {
  return (
    <>
      <Flex justifyContent={"center"}>
        <Image
          src={"/assets/arrow/up.png"}
          alt={""}
          width={"50px"}
          height={"29px"}
        />
      </Flex>
      <Flex justifyContent={"center"} mt={"2px"}>
        <Image
          src={"/assets/arrow/left.png"}
          alt={""}
          width={"50px"}
          height={"29px"}
        />
        <Image
          src={"/assets/arrow/down.png"}
          alt={""}
          width={"50px"}
          height={"29px"}
        />
        <Image
          src={"/assets/arrow/right.png"}
          alt={""}
          width={"50px"}
          height={"29px"}
        />
      </Flex>
    </>
  );
};

export default Arrows;
