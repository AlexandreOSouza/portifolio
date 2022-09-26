import { Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import DefaultButton from "../components/CTA/default";
import GhostButton from "../components/CTA/ghost";
import PrimaryButton from "../components/CTA/primary";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <PrimaryButton onClick={() => alert("click")}>start-game</PrimaryButton>
      <DefaultButton onClick={() => alert("click")}>start-game</DefaultButton>
      <GhostButton onClick={() => alert("click")}>start-game</GhostButton>
    </div>
  );
};

export default Home;
