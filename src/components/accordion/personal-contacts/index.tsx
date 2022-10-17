import { AccordionButtonProps, AccordionPanel } from "@chakra-ui/react";
import { RiMailFill, RiPhoneFill } from "react-icons/ri";
import Item from "../../pages/content/about/folder/item";
import AccordionCustomButton from "../button";

type Props = AccordionButtonProps & {
  isExpanded: boolean;
};

const PersonalInfoAccordion = ({ isExpanded, ...props }: Props) => {
  return (
    <>
      <AccordionCustomButton
        title={"contacts"}
        isExpanded={isExpanded}
        {...props}
      />

      <AccordionPanel background={"primary.mid"}>
        <Item
          title={
            <a href="mailto:alesouza.dev@gmail.com">alesouza.dev@gmail.com</a>
          }
          icon={<RiMailFill />}
        />
        <Item
          title={
            <a
              href="https://wa.me/5511959147536?text=Hello"
              target={"_blank"}
              rel="noreferrer"
            >
              5511959147536
            </a>
          }
          icon={<RiPhoneFill />}
        />
      </AccordionPanel>
    </>
  );
};

export default PersonalInfoAccordion;
