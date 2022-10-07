import {
  useDisclosure,
  Drawer,
  DrawerContent,
  DrawerBody,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { PAGE_INDEX, PAGE_URL } from "../../helper/constants";
import { usePage } from "../../hooks/usePages";
import DrawerButton from "../CTA/drawer-button";
type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const MenuDrawer = ({ isOpen, onClose }: Props) => {
  const router = useRouter();
  const currentPage = router.asPath.replace("/", "");

  const handleClick = (pageIndex: number) => {
    router.push(`/${PAGE_URL[pageIndex as 1 | 2 | 3 | 4]}`);
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
              isActive={currentPage === PAGE_URL[1]}
              onClick={() => handleClick(PAGE_INDEX.HOME)}
            >
              _hello
            </DrawerButton>
            <DrawerButton
              isActive={currentPage === PAGE_URL[2]}
              onClick={() => handleClick(PAGE_INDEX.ABOUT)}
            >
              _about-me
            </DrawerButton>
            <DrawerButton
              isActive={currentPage === PAGE_URL[3]}
              onClick={() => handleClick(PAGE_INDEX.PROJECTS)}
            >
              _projects
            </DrawerButton>
            <DrawerButton
              isActive={currentPage === PAGE_URL[4]}
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
