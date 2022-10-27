import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Feedback from "../components/feedback";
import Footer from "../components/footer";
import Header from "../components/header";
import MainContent from "../components/pages/content";

const Home: NextPage = (props: any) => {
  return (
    <Flex
      backgroundColor={"primary.mid"}
      flex={1}
      height={"100vh"}
      flexDir={"column"}
      className={"custom-scrollbar"}
    >
      <Header />
      <MainContent page={props.page} />
      <Feedback />
      <Footer />
    </Flex>
  );
};

export async function getServerSideProps(context: any) {
  return {
    props: { page: context.query.index },
  };
}

export default Home;
