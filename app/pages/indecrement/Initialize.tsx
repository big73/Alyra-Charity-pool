import {
  useConnection,
  useAnchorWallet,
} from "@solana/wallet-adapter-react"
import * as anchor from "@project-serum/anchor"
import { FC, useEffect, useState } from "react"
import idl from "../../idl.json"
import { Button } from "@chakra-ui/react"

const PROGRAM_ID = new anchor.web3.PublicKey(
  `8fG5rQKuvC6NBupJRQvANP2nZjfKzE23tSPLbC61NViJ`
)

export interface Props {
  setCounter
  setTransactionUrl
}

export const Initialize: FC<Props> = ({ setCounter, setTransactionUrl }) => {
  const [program, setProgram] = useState<anchor.Program>()

  const { connection } = useConnection()
  const wallet = useAnchorWallet()

  useEffect(() => {
    let provider: anchor.Provider
    try {
      provider = new anchor.AnchorProvider(connection, wallet, {})
    } catch {
      provider = anchor.getProvider()
    }
    anchor.setProvider(provider)

    const program = new anchor.Program(idl as anchor.Idl, PROGRAM_ID)
    setProgram(program)
  }, [])

  const onClick = async () => {
    const newAccount = anchor.web3.Keypair.generate()

    const sig = await program.methods
      .initialize()
      .accounts({
        counter: newAccount.publicKey,
      })
      .signers([newAccount])
      .rpc()

    setTransactionUrl(`https://explorer.solana.com/tx/${sig}?cluster=devnet`)
    setCounter(newAccount.publicKey)
  }

  return <Button onClick={onClick}>Initialize Counter</Button>
}
