import { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Increment } from "./Increment";
import { Initialize } from "./Initialize";
import { useEffect, useState } from "react";

import idl from "../../idl.json";
import * as anchor from "@project-serum/anchor";
import Head from "next/head";
import {
  Spacer,
  VStack,
  Box,
  Stack,
  Link,
} from "@chakra-ui/react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { AppBar } from "../../components/AppBar";
import Header from "../../components/header/Header";

const PROGRAM_ID = `8fG5rQKuvC6NBupJRQvANP2nZjfKzE23tSPLbC61NViJ`;

const Indecrement: NextPage = (props) => {
  const [counter, setCounter] = useState("");
  const [transactionUrl, setTransactionUrl] = useState("");
  const wallet = useWallet();
  const { connection } = useConnection();
  const [accounts, setAccounts] = useState(null);

  useEffect(() => {
    let provider: anchor.Provider;
    try {
      provider = new anchor.AnchorProvider(connection, wallet, {});
    } catch {
      provider = anchor.getProvider();
    }
    anchor.setProvider(provider);

    const program = new anchor.Program(idl as anchor.Idl, PROGRAM_ID);
    const fetchAccounts = async () => {
      await program.account.counter.all().then((fetchedAccounts) => {
        setAccounts(fetchedAccounts);
      });
    };
    fetchAccounts();
  }, [counter]);

  return (
    <div className={styles.App}>
      <Head>
        <title>Indecrement</title>
      </Head>
      <Box h="calc(100vh)" w="full">
        <Stack w="full" h="calc(100vh)" justify="center">
          <AppBar />
          <Header />
          <div className={styles.AppBody}>
            {wallet.connected ? (
              accounts ? (
                <div>
                  {accounts.map((account, index) => (
                    <VStack key={account.publicKey}>
                      <Increment
                        counter={account.publicKey}
                        setTransactionUrl={setTransactionUrl}
                      />
                    </VStack>
                  ))}
                  <Initialize
                    setCounter={setCounter}
                    setTransactionUrl={setTransactionUrl}
                  />
                </div>
              ) : (
                <Initialize
                  setCounter={setCounter}
                  setTransactionUrl={setTransactionUrl}
                />
              )
            ) : (
              <WalletMultiButton />
            )}
            <Spacer />
            {transactionUrl && (
              <Link href={transactionUrl} color="white" isExternal margin={8}>
                View most recent transaction
              </Link>
            )}
          </div>
        </Stack>
      </Box>
    </div>
  );
};

export default Indecrement;
