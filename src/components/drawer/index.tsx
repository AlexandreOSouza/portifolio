import {
  useDisclosure,
  Drawer,
  DrawerContent,
  DrawerBody,
} from "@chakra-ui/react";
import DrawerButton from "../CTA/drawer-button";
type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const MenuDrawer = ({ isOpen, onClose }: Props) => {
  return (
    <>
      <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
        <DrawerContent
          height={"calc(100vh - 106px)"}
          background={"primary.mid"}
          p={0}
          marginTop={"56px"}
        >
          <DrawerBody p={0}>
            <DrawerButton>_hello</DrawerButton>
            <DrawerButton>_about-me</DrawerButton>
            <DrawerButton>_projects</DrawerButton>
            <DrawerButton>_contact-me</DrawerButton>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
