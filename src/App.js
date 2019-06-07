import React from "react";
import MessageWindow from "./components/Messages/Messages";
import "./App.css";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SideBar />
        <MessageWindow />
      </header>
    </div>
  );
}

export default App;
