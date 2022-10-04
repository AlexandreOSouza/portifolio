import { Flex, Image, Text } from "@chakra-ui/react";
import { RiReactjsLine } from "react-icons/ri";
import DefaultButton from "../../../../CTA/default";
import GhostButton from "../../../../CTA/ghost";
import PrimaryButton from "../../../../CTA/primary";
import CardIcon from "./card-icon";

const ProjectCard = () => {
  return (
    <Flex flexDirection={"column"}>
      <Flex>
        <Text textStyle={"label"} color={"primary.blue"}>
          Project 1
        </Text>
        <Text textStyle={"label"} color={"secondary.gray"}>
          &nbsp;{"// _tetris-game"}
        </Text>
      </Flex>
      <Flex
        width={"320px"}
        height={"250px"}
        borderRadius={"15px"}
        border={"1px solid"}
        borderColor={"lines.main"}
        flexDir={"column"}
        mt={"15px"}
      >
        <Flex
          height={"45%"}
          width={"100%"}
          borderTopRadius={"15px"}
          backgroundImage={"./assets/cards/game.jpeg"}
          backgroundPosition={"center"}
          backgroundSize={"cover"}
          justifyContent={"flex-end"}
          pt={"10px"}
          pr={"10px"}
        >
          <CardIcon backgroundColor={"#86E1F9"} icon={<RiReactjsLine />} />
        </Flex>
        <Flex
          pt={"24px"}
          pb={"32px"}
          pl={"31px"}
          background={"primary.midDark"}
          height={"55%"}
          borderBottomRadius={"25px"}
          flexDir={"column"}
          rowGap={3}
        >
          <Text color={"secondary.gray"} fontSize={"14px"}>
            Duis aute irure dolor in velit esse cillum dolore.
          </Text>
          <DefaultButton width={"130px"}>view-project</DefaultButton>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProjectCard;
