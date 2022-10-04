import { Box } from "@chakra-ui/react";

type Props = {
  icon: any;
  backgroundColor: string;
};

const CardIcon = ({ icon, backgroundColor }: Props) => {
  return (
    <Box
      display={"flex"}
      width={"28px"}
      height={"28px"}
      borderRadius={"2px"}
      background={backgroundColor}
      justifyContent={"center"}
      alignItems={"center"}
      fontSize={"20px"}
    >
      {icon}
    </Box>
  );
};

export default CardIcon;
