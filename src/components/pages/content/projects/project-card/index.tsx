import { Flex, Icon, Image, Text } from "@chakra-ui/react";
import { useMemo } from "react";
import { RiCss3Fill, RiHtml5Fill, RiReactjsLine } from "react-icons/ri";
import { SiSolidity, SiTsnode, SiTypescript } from "react-icons/si";
import { FaEthereum, FaNodeJs } from "react-icons/fa";
import DefaultButton from "../../../../CTA/default";
import CardIcon from "./card-icon";
import { MdOutlineWorkOutline } from "react-icons/md";
import { ProjectProps } from "../../../../../helper/constants/projects";

type Props = ProjectProps & {
  onOpen: (projectId: number) => void;
};

const CLICK_NAME = "view-project";

const ProjectCard = ({ onOpen, ...props }: Props) => {
  const handleClick = (e: any) => {
    const clickName = e.name;
    if (clickName !== CLICK_NAME) {
      onOpen(props.id);
    }
  };

  const renderIcons = useMemo(() => {
    return (
      <Flex columnGap={2}>
        {props.react && (
          <CardIcon backgroundColor={"#86E1F9"} icon={<RiReactjsLine />} />
        )}
        {props.html && (
          <CardIcon backgroundColor={"#86E1F9"} icon={<RiHtml5Fill />} />
        )}
        {props.css && (
          <CardIcon backgroundColor={"#86E1F9"} icon={<RiCss3Fill />} />
        )}
        {props.nodejs && (
          <CardIcon backgroundColor={"#86E1F9"} icon={<FaNodeJs />} />
        )}
        {props.typescript && (
          <CardIcon backgroundColor={"#86E1F9"} icon={<SiTypescript />} />
        )}
        {props.ethereum && (
          <CardIcon backgroundColor={"#86E1F9"} icon={<FaEthereum />} />
        )}
        {props.popstand && (
          <CardIcon
            backgroundColor={"#86E1F9"}
            icon={<MdOutlineWorkOutline />}
          />
        )}
        {props.solidity && (
          <CardIcon backgroundColor={"#86E1F9"} icon={<SiSolidity />} />
        )}
      </Flex>
    );
  }, [props]);

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
          cursor={"pointer"}
          onClick={(e) => handleClick(e.target)}
          _hover={{
            mt: "10px",
            boxShadow: "1px 3px 42px -15px rgba(0,0,0,0.75)",
          }}
        >
          <Flex
            height={"45%"}
            width={"100%"}
            borderTopRadius={"15px"}
            backgroundImage={props.image || "./assets/cards/game.jpeg"}
            backgroundPosition={"center"}
            backgroundSize={"cover"}
            backgroundRepeat={"no-repeat"}
            justifyContent={"flex-end"}
            style={{
              backgroundPositionY: "1px",
            }}
            pt={"10px"}
            pr={"10px"}
          ></Flex>
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
            <Flex
              flexDirection={"row-reverse"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              {renderIcons}
              <a
                href={props.ctaLink}
                target={"_blank"}
                rel="noreferrer"
                style={{ zIndex: 2 }}
              >
                <DefaultButton name={CLICK_NAME} width={"130px"}>
                  view-project
                </DefaultButton>
              </a>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProjectCard;
