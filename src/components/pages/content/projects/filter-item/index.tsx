import {
  Box,
  Checkbox,
  Flex,
  Text,
  useCheckbox,
  chakra,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { RiCheckFill } from "react-icons/ri";

type Props = {
  title: any;
  icon: ReactElement;
  onClick?: () => void;
  isActive?: boolean;
};

const FilterItem = ({ title, icon, onClick, isActive = false }: Props) => {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox();

  return (
    <chakra.label
      display="flex"
      flexDirection="row"
      alignItems="center"
      rounded="lg"
      cursor="pointer"
      {...htmlProps}
    >
      <input {...getInputProps()} hidden />
      <Flex
        alignItems="center"
        justifyContent="center"
        border="1px solid"
        borderColor="secondary.gray"
        borderRadius={"2px"}
        w={4}
        h={4}
        {...getCheckboxProps()}
      >
        {state.isChecked && (
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
        filter={state.isChecked ? "none" : "brightness(0.5)"}
      >
        {icon}
      </Flex>

      <Text
        ml={"10px"}
        fontSize={"16px"}
        color={state.isChecked ? "white" : "secondary.gray"}
      >
        {title}
      </Text>
    </chakra.label>
  );
};

export default FilterItem;
