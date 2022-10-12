import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { RiCloseFill } from "react-icons/ri";
import { useFilter } from "../../../../../hooks/useFilter";
import ProjectCard from "../project-card";

const ProjectsList = () => {
  const { projects } = useFilter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex flex={1} flexDirection={"column"}>
      <Flex
        display={{ base: "none", lg: "flex" }}
        height={"49px"}
        width={"200px"}
        borderRight={"1px solid"}
        borderColor={"lines.main"}
        color={"secondary.gray"}
        justifyContent={"space-between"}
        alignItems={"center"}
        pr={"12px"}
        pl={"14px"}
      >
        <Text textStyle={"label"}>Showing {projects.length}</Text>
        <RiCloseFill />
      </Flex>
      <Box
        className="custom-scroll"
        display={"grid"}
        gridTemplateColumns={{
          base: "repeat(auto-fill, minmax(165px, 1fr))",
          md: "repeat(auto-fill, minmax(280px, 1fr))",
          xl: "repeat(auto-fill, minmax(290px, 1fr))",
        }}
        borderTop={"1px solid"}
        borderColor={"lines.main"}
        alignItems={"flex-start"}
        overflowY={"auto"}
        rowGap={10}
        columnGap={10}
        height={"100%"}
        py={"50px"}
        px={"27px"}
        pb={"70px"}
        justifyContent={"center"}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} onOpen={onOpen} {...project} />
        ))}
      </Box>
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody></ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </Flex>
  );
};

export default ProjectsList;
