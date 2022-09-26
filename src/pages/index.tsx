import { Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import DefaultButton from "../components/CTA/default";
import GhostButton from "../components/CTA/ghost";
import PrimaryButton from "../components/CTA/primary";
import Header from "../components/header";

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
      <PrimaryButton onClick={() => alert("click")}>start-game</PrimaryButton>
      <DefaultButton onClick={() => alert("click")}>start-game</DefaultButton>
      <GhostButton onClick={() => alert("click")}>start-game</GhostButton>
    </Flex>
  );
};

export default Home;
