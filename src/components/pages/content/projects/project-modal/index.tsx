import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";
import DefaultButton from "../../../../CTA/default";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { PROJECTS } from "../../../../../helper/constants";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  projectId: number | undefined;
};

const slideImages = [
  {
    url: "./assets/projects/coffee.png",
    caption: "Slide 1",
  },
  {
    url: "./assets/projects/coffee.png",
    caption: "Slide 2",
  },
  {
    url: "./assets/projects/coffee.png",
    caption: "Slide 3",
  },
];

const properties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
};

const ProjectModal = ({ isOpen, onClose, projectId }: Props) => {
  const project = PROJECTS.find((project) => project.id === projectId);

  const Slideshow = () => {
    return (
      <Box className="slide-container" width={"100%"} height={"100%"}>
        <Slide {...properties}>
          {project?.slideImage!.map((slideImage, index) => (
            <Box className="each-slide" key={index} height={"230px"}>
              <Box
                style={{
                  backgroundImage: `url(${slideImage.src})`,
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
                height={"100%"}
              ></Box>
            </Box>
          ))}
        </Slide>
      </Box>
    );
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
      <ModalOverlay />
      <ModalContent
        background={"primary.mid"}
        border={"1px solid"}
        borderColor={"lines.main"}
        height={"80vh"}
        mt={"1vh"}
        maxH={"729px"}
      >
        <ModalHeader>
          <Text color={"secondary.gray"}>{project?.subtitle}</Text>
        </ModalHeader>
        <ModalCloseButton color={"secondary.gray"} />
        <ModalBody p={0}>
          <Flex
            width={"100%"}
            height={"45%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {Slideshow()}
          </Flex>
          <Flex
            width={"100%"}
            height={"55%"}
            px={"20px"}
            flexDirection={"column"}
            mt={"70px"}
          >
            <Text
              fontSize={"14px"}
              textAlign={"justify"}
              color={"secondary.midGray"}
            >
              {project?.text}
            </Text>
            <Flex mt={"20px"}>
              <Text color={"primary.blue"} fontWeight={"600"}>
                Owner:
              </Text>
              <a
                href={project?.ctaLinkOwner}
                target={"_blank"}
                rel="noreferrer"
              >
                <Text
                  color={"secondary.gray"}
                  textDecoration={"underline"}
                  ml={"5px"}
                >
                  {project?.owner}
                </Text>
              </a>
            </Flex>
            <Flex mt={"10px"}>
              <Text color={"primary.blue"} fontWeight={"600"}>
                I was working as a Frontend Developer for:
              </Text>
              <a
                href={"https://popstand.com/"}
                target={"_blank"}
                rel="noreferrer"
              >
                <Text
                  color={"secondary.gray"}
                  textDecoration={"underline"}
                  ml={"5px"}
                >
                  Popstand
                </Text>
              </a>
            </Flex>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <a href={project?.ctaLink} target={"_blank"} rel="noreferrer">
            <DefaultButton width={"130px"}>view-project</DefaultButton>
          </a>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;
