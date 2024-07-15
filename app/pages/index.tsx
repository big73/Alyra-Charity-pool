import { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { AppBar } from "../components/AppBar";
import Head from "next/head";
import { Box, Stack } from "@chakra-ui/react";
import Header from "../components/header/Header";

const Home: NextPage = (props) => {
  return (
    <div className={styles.App}>
      <Head>
        <title>Charity pool</title>
      </Head>
      <Box h="calc(100vh)" w="full">
        <Stack w="full" h="calc(100vh)" justify="center">
          <AppBar />
          <Header />
          <div className={styles.AppBody}>
            <h1 className={styles.appTitle}>Charity pool</h1>
          </div>
        </Stack>
      </Box>
    </div>
  );
};

export default Home;
