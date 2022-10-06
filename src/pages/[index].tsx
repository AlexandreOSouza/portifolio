import { Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import DefaultButton from "../components/CTA/default";
import GhostButton from "../components/CTA/ghost";
import PrimaryButton from "../components/CTA/primary";
import Footer from "../components/footer";
import Header from "../components/header";
import MainContent from "../components/pages/content";

const Home: NextPage = (props: any) => {
  useEffect(() => {
    console.log(props);
  }, [props]);
  return (
    <Flex
      backgroundColor={"primary.mid"}
      flex={1}
      height={"100vh"}
      flexDir={"column"}
    >
      <Header />
      <MainContent />
      <Footer />
    </Flex>
  );
};

export async function getServerSideProps(context: any) {
  console.log(context);
  return {
    props: { page: context.query.index }, // will be passed to the page component as props
  };
}

export default Home;
