import React from "react";
import logo from "./logo.svg";
import "./App.css";

class Welcome extends React.Component {
  render() {
    return <h1>This website gives some rando numbers</h1>;
  }
}

function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}

export default App;
