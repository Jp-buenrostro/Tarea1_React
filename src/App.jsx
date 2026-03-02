


import { useState } from "react";
import "./App.css";
import HijoA from "./components/hijoA";
import HijoB from "./components/hijoB";
import HijoC from "./components/hijoC";
import Lista from "./components/lista";

function App() {
  const [count, setCount] = useState(0);
  console.log("Render App");

  return (
    <>
      <h1>Contador: {count}</h1>

      <button onClick={() => setCount(count + 1)}>Incrementar</button>

      <HijoA />
      <HijoB />
      <HijoC />
      <Lista />
    </>
  );
}


export default App;