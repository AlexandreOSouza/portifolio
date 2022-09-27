import { Image } from "@chakra-ui/react";

type Props = {
  isLeft?: boolean;
};

const Food = ({ isLeft }: Props) => {
  return (
    <Image
      src={"/assets/food.png"}
      width={"20px"}
      height={"20px"}
      alt={"food"}
      filter={isLeft ? "brightness(0.5)" : "none"}
    />
  );
};

export default Food;
