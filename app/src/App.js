import React, { useEffect, useState } from "react";
import "./App.css";
import CandyMachine from "./CandyMachine";
const App = () => {
  const [walletAddress, setWalletAddress] = useState(undefined);


  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletConnected();
    };
    window.addEventListener("load", onLoad);
    return () => {
      // window.removeEventListener("load");
    };
  }, []);

  const checkIfWalletConnected = async () => {
    try {
      const { solana } = window;
      if (solana && solana.isPhantom) {
        console.log("Phantom wallet found");
        const response = await solana.connect({ onlyIfTrusted: true });
        console.log(response.publicKey.toString());
        setWalletAddress(response.publicKey.toString());
      } else {
        console.log("Wallet not found, Install phantom");
      }
    } catch (e) {
      console.log(`${e}`);
    }
  };

  const connectWallet = async () => {
    const { solana } = window;
    if (solana) {
      const response = await solana.connect();
      console.log(response.publicKey.toString());
      setWalletAddress(response.publicKey.toString());
    }
  };

  const renderConnectWalletButton = () => (
    <button
      className="cta-button connect-wallet-button"
      onClick={connectWallet}
    >
      Connect to Wallet
    </button>
  );

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">Trace NFT</p>
          <p className="sub-text">Mint and transfer nft's</p>
          {!walletAddress && renderConnectWalletButton()}
          {walletAddress && <CandyMachine walletAddress={window.solana} />}
        </div>
      </div>
    </div>
  );
};

export default App;
