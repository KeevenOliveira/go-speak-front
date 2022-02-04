import React, { useEffect } from "react";
import io from "socket.io-client";


const socket = io("http://localhost:8001");
socket.on("connect", () => console.log("entrou!"));
function App() {

  useEffect(() => {
    // const message = () => {

    // }
  }, []);

  return (
    <>
      <div className="App">
        <h1>Hello world</h1>
      </div>
    </>
  );
};

export default App;
