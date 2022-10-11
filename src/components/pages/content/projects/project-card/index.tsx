import { Flex, Image, Text } from "@chakra-ui/react";
import { RiReactjsLine } from "react-icons/ri";
import { ProjectProps } from "../../../../../helper/constants";
import DefaultButton from "../../../../CTA/default";
import CardIcon from "./card-icon";

const ProjectCard = (props: ProjectProps) => {
  return (
    <Flex justifyContent={"center"}>
      <Flex flexDirection={"column"}>
        <Flex
          width={{ base: "100%", lg: "auto" }}
          flexDir={{ base: "row", md: "row" }}
        >
          <Text
            textStyle={"label"}
            color={"primary.blue"}
            whiteSpace={"nowrap"}
          >
            {props.title}
          </Text>
          <Text
            textStyle={"label"}
            color={"secondary.gray"}
            whiteSpace={"nowrap"}
          >
            &nbsp;{`// ${props.subtitle}`}
          </Text>
        </Flex>
        <Flex
          height={"300px"}
          width={"320px"}
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
            backgroundImage={props.image || "./assets/cards/game.jpeg"}
            backgroundPosition={"center"}
            backgroundSize={"cover"}
            justifyContent={"flex-end"}
            pt={"10px"}
            pr={"10px"}
          >
            <CardIcon backgroundColor={"#86E1F9"} icon={<RiReactjsLine />} />
          </Flex>
          <Flex
            pt={"20px"}
            pb={"30px"}
            px={"31px"}
            background={"primary.midDark"}
            height={"55%"}
            borderBottomRadius={"25px"}
            flexDir={"column"}
            rowGap={3}
            justifyContent={"space-between"}
          >
            <Text color={"secondary.gray"} fontSize={"14px"}>
              {props.description}
            </Text>
            <a href={props.ctaLink} target={"_blank"} rel="noreferrer">
              <DefaultButton width={"130px"}>view-project</DefaultButton>
            </a>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProjectCard;
