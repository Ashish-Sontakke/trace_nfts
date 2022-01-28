import React, { useEffect, useState } from "react";
import "./App.css";
import { PublicKey, Transaction } from "@solana/web3.js";


// import {
//   Program, Provider, web3
// } from '@project-serum/anchor';

import idl from './idl.json';

// const { SystemProgram, Keypair } = web3;

type DisplayEncoding = "utf8" | "hex";
type PhantomEvent = "disconnect" | "connect" | "accountChanged";
type PhantomRequestMethod =
  | "connect"
  | "disconnect"
  | "signTransaction"
  | "signAllTransactions"
  | "signMessage";

interface ConnectOpts {
  onlyIfTrusted: boolean;
}

interface PhantomProvider {
  publicKey: PublicKey | null;
  isConnected: boolean | null;
  signTransaction: (transaction: Transaction) => Promise<Transaction>;
  signAllTransactions: (transactions: Transaction[]) => Promise<Transaction[]>;
  signMessage: (
    message: Uint8Array | string,
    display?: DisplayEncoding
  ) => Promise<any>;
  connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>;
  disconnect: () => Promise<void>;
  on: (event: PhantomEvent, handler: (args: any) => void) => void;
  request: (method: PhantomRequestMethod, params: any) => Promise<unknown>;
}

function App(this: any) {
  const network = "http://127.0.0.1:8899";
  const [provider, setProvider] = useState<PhantomProvider | undefined>(
    undefined
  );

  const [publicKey, setPublicKey] = useState<String | undefined>(undefined);

  useEffect(() => {
    connect();
  }, []);

  const connect = async () => {
    const provider = await getProvider();
    if (provider) setProvider(await provider);
    else setProvider(undefined);
    setPublicKey(provider!.publicKey?.toString());
  };

  const getProvider = async (): Promise<PhantomProvider | undefined> => {
    if ("solana" in window) {
      await window.solana.connect();

      const provider = window.solana!;
      if (provider.isPhantom) {
        console.log(provider);
        console.log("Is Phantom installed?  ", provider.isPhantom);
        return provider;
      }
    } else {
      document.write("Install https://www.phantom.app/");
    }
  };

  // async function createFallower(event : Event)  {    
  //   const provider = await getProvider()
  //   /* create the program interface combining the idl, program ID, and provider */
  //   const program = new Program(idl, programID, provider);
  //   try {
  //     await program.rpc.mintUser(event.target.metadata.value,{
  //       const baseAccount = 
  //       accounts: {
  //         user: follower,
  //         parent: provider!.wallet.publicKey,
  //         systemProgram: SystemProgram.programId,
  //       },
  //       signers: [baseAccount]
  //     });

  //     const account = await program.account.baseAccount.fetch(baseAccount.publicKey);
  //     console.log('account: ', account);
      
  //   } catch (err) {
  //     console.log("Transaction error: ", err);
  //   }
  // }

  
  if (publicKey) {
    return (
      <div className="App">
        <h1>Connected to Phantom</h1>
        <h3>{publicKey}</h3>
        <hr />
        <form  //onSubmit={createFollower(event.target.follower.value)}
        >
          <label
            style={{
              padding: "10px",
              fontWeight: "16px",
            }}
          >
            Follower PubKey
          </label>
          <input
            type="text"
            id="follower"
            style={{
              padding: "10px",
              fontWeight: "bold",
            }}
          ></input>

          <label
            style={{
              padding: "10px",
              fontWeight: "16px",
            }}
          >
            NFT Metadata
          </label>
          <input
            type="text"
            style={{
              padding: "10px",
              fontWeight: "bold",
            }}
          ></input>
          <button
            style={{
              margin: "8px",
              fontSize: "16px",
              padding: "10px",
              fontWeight: "bold",
              borderRadius: "5px",
            }}
          >
            Mint New User
          </button>
        </form>

        <hr />



        <form>

          
          <label
            style={{
              padding: "10px",
              fontWeight: "16px",
            }}
          >
            NFT Metadata
          </label>
          <input
            type="text"
            style={{
              padding: "10px",
              fontWeight: "bold",
            }}
          ></input>
          <button
            style={{
              margin: "8px",
              fontSize: "16px",
              padding: "10px",
              fontWeight: "bold",
              borderRadius: "5px",
            }}
          >
            Mint New NFT
          </button>
        </form>
        <hr />
      </div>
    );
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2> Connect to Phantom Wallet</h2>
        {provider && (
          <button
            style={{
              fontSize: "16px",
              padding: "15px",
              fontWeight: "bold",
              borderRadius: "5px",
            }}
          >
            Connect to Phantom Wallet
          </button>
        )}

        {!provider && (
          <p>
            No provider found. Install{" "}
            <a href="https://phantom.app/">Phantom Browser extension</a>
          </p>
        )}
      </header>
    </div>
  );
}

export default App;
