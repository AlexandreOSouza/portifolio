import { Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import DefaultButton from "../components/CTA/default";
import GhostButton from "../components/CTA/ghost";
import PrimaryButton from "../components/CTA/primary";
import Footer from "../components/footer";
import Header from "../components/header";
import MainContent from "../components/pages/content";

const Home: NextPage = () => {
  return (
    <Flex
      backgroundColor={"primary.mid"}
      flex={1}
      height={"100vh"}
      flexDir={"column"}
    >
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <MainContent />
      <Footer />
    </Flex>
  );
};

export default Home;
