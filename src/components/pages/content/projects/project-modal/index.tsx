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
} from "@chakra-ui/react";
import DefaultButton from "../../../../CTA/default";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const ProjectModal = ({ isOpen, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
      <ModalOverlay />
      <ModalContent
        background={"primary.mid"}
        border={"1px solid"}
        borderColor={"lines.main"}
        height={"80vh"}
      >
        <ModalHeader>
          <Text color={"secondary.gray"}>Modal Title</Text>
        </ModalHeader>
        <ModalCloseButton color={"secondary.gray"} />
        <ModalBody p={0}>
          <Flex
            width={"100%"}
            height={"45%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text color={"secondary.gray"}>photo slide</Text>
          </Flex>
          <Flex
            width={"100%"}
            height={"55%"}
            px={"20px"}
            flexDirection={"column"}
          >
            <Text
              fontSize={"14px"}
              textAlign={"justify"}
              color={"secondary.midGray"}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et
              metus auctor, vestibulum tortor vel, placerat sem. Suspendisse
              mollis ligula nunc, eu tempus libero molestie vitae. Sed tincidunt
              bibendum augue at aliquam. Pellentesque maximus nisl eu tempus
              fermentum. Praesent pulvinar non neque non tristique. Nam molestie
              nulla bibendum dolor mollis dictum. Praesent ut aliquam enim. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Nam pulvinar malesuada dolor non rhoncus.
              Vestibulum vel lorem neque.
            </Text>
            <Flex mt={"20px"}>
              <Text color={"primary.blue"} fontWeight={"600"}>
                Owner:
              </Text>
              <a
                href={"https://www.nftgenius.com/"}
                target={"_blank"}
                rel="noreferrer"
              >
                <Text
                  color={"secondary.gray"}
                  textDecoration={"underline"}
                  ml={"5px"}
                >
                  NFT Genius
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
          <a href={"#"} target={"_blank"} rel="noreferrer">
            <DefaultButton width={"130px"}>view-project</DefaultButton>
          </a>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;
