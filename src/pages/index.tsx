import { Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import PrimaryButton from "../components/CTA/primary";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <PrimaryButton onClick={() => alert("click")}>start-game</PrimaryButton>
    </div>
  );
};

export default Home;
