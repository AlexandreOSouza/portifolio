import {
  Box,
  Checkbox,
  Flex,
  Text,
  useCheckbox,
  chakra,
} from "@chakra-ui/react";
import { ReactElement, useEffect, useState } from "react";
import { RiCheckFill } from "react-icons/ri";
import { useFilter } from "../../../../../hooks/useFilter";

type Props = {
  title: any;
  icon: ReactElement;
  onClick?: () => void;
  isActive?: boolean;
};

const FilterItem = ({ title, icon, onClick, isActive = false }: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  const { updateFilterList } = useFilter();

  const handleClick = () => {
    setIsChecked((prevState) => !prevState);
    updateFilterList(title);
  };

  return (
    <Flex
      display="flex"
      flexDirection="row"
      alignItems="center"
      rounded="lg"
      cursor="pointer"
      onClick={handleClick}
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        border="1px solid"
        borderColor="secondary.gray"
        borderRadius={"2px"}
        w={4}
        h={4}
      >
        {isChecked && (
          <Flex
            width={"100%"}
            height={"100%"}
            bg="secondary.gray"
            justifyContent={"center"}
            alignItems="center"
          >
            <RiCheckFill color="white" />
          </Flex>
        )}
      </Flex>
      <Flex
        color={"secondary.gray"}
        ml={"24px"}
        fontSize={"16px"}
        filter={isChecked ? "none" : "brightness(0.5)"}
      >
        {icon}
      </Flex>

      <Text
        ml={"10px"}
        fontSize={"16px"}
        color={isChecked ? "white" : "secondary.gray"}
        className={"noselect"}
      >
        {title}
      </Text>
    </Flex>
  );
};

export default FilterItem;
