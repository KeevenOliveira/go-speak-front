import React from "react";
import io from "socket.io-client";

function App() {
  const socket = io("http://localhost:8080");
  socket.on('connection', (socket) => {
    console.log(socket);
    console.log('Hello World!')
  })

  console.log(socket.active);

  return (
    <>
      <div className="App">
        <h1>Hello world</h1>
      </div>
    </>
  );
};

export default App;
