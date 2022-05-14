import "./App.css";

import { useState } from "react";

// import { Routes, Route } from "react-router-dom";

function App() {
  const [promptInput, setPromptInput] = useState("");

  const handleChange = (event) => {
    setPromptInput(event.target.value);
    console.log(event.target.value);
  };
  return (
    <main className="App">
      <form>
        <input type="text" onChange={handleChange}></input>
        <input type="submit" placeholder="GENERATE"></input>
      </form>
    </main>
  );
}

export default App;
