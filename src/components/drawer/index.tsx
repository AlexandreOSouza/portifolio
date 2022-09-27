import {
  useDisclosure,
  Drawer,
  DrawerContent,
  DrawerBody,
} from "@chakra-ui/react";
import { PAGE_INDEX } from "../../helper/constants";
import { usePage } from "../../hooks/usePages";
import DrawerButton from "../CTA/drawer-button";
type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const MenuDrawer = ({ isOpen, onClose }: Props) => {
  const { currentPage, setCurrentPage } = usePage();

  const handleClick = (pageIndex: number) => {
    setCurrentPage(pageIndex);
    onClose();
  };

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
            <DrawerButton
              isActive={currentPage === PAGE_INDEX.HOME}
              onClick={() => handleClick(PAGE_INDEX.HOME)}
            >
              _hello
            </DrawerButton>
            <DrawerButton
              isActive={currentPage === PAGE_INDEX.ABOUT}
              onClick={() => handleClick(PAGE_INDEX.ABOUT)}
            >
              _about-me
            </DrawerButton>
            <DrawerButton
              isActive={currentPage === PAGE_INDEX.PROJECTS}
              onClick={() => handleClick(PAGE_INDEX.PROJECTS)}
            >
              _projects
            </DrawerButton>
            <DrawerButton
              isActive={currentPage === PAGE_INDEX.CONTACT}
              onClick={() => handleClick(PAGE_INDEX.CONTACT)}
            >
              _contact-me
            </DrawerButton>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
