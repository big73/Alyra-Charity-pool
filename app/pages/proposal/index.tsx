import Head from "next/head";
import { AppBar } from "../../components/AppBar";
import Header from "../../components/header/Header";
import styles from "../../styles/Home.module.css";
import { FormControl, FormLabel, Box, Stack, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

export default function Proposal() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [options, setOptions] = useState();

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleOptions = (event) => {
    setOptions(event.target.value);
  };

  const submitProposal = () => {
    console.log(title);
    console.log(description);
    console.log(options);
  };

  return (
    <div className={styles.App}>
      <Head>
        <title>Proposal</title>
      </Head>
      <Box h="calc(100vh)" w="full">
        <Stack w="full" h="calc(100vh)" justify="center">
          <AppBar />
          <Header />
          <div className={styles.AppBody}>
            <h1 className={styles.appTitle}>DAO Vote - proposal</h1>
            <div>
              <FormControl>
                <Stack spacing={3} padding={3}>
                  <FormLabel color="white">Proposal title</FormLabel>
                  <Input
                    placeholder="Proposal title"
                    size="md"
                    onChange={handleTitle}
                  />

                  <FormLabel color="white">Proposal description</FormLabel>
                  <Input
                    placeholder="Proposal description"
                    size="md"
                    onChange={handleDescription}
                  />

                  <FormLabel color="white">Proposal options</FormLabel>
                  <Input
                    placeholder="Porposal options"
                    size="md"
                    onChange={handleOptions}
                  />
                  <Button
                    mt={4}
                    colorScheme='teal'
                    type='submit'
                    onClick={submitProposal}
                  >
                    Create vote
                  </Button>
                </Stack>
              </FormControl>
            </div>
          </div>
        </Stack>
      </Box>
    </div>
  );
}


