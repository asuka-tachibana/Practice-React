import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";

function App() {

  return (
    <div className="App">
      <NavBar />
        <>
          <ChatBox />
        </>
    </div>
  );
}

export default App;