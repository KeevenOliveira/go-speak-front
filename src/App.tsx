import React from "react";
import io from "socket.io-client";
import Chat from "./components/Chat";
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Chat />
    </>
  );
};

export default App;
