import { useState } from "react";
import HijoA from "./components/hijoA";
import HijoB from "./components/hijoB";
import HijoC from "./comXWponents/hijoC";

function App() {
  const [count, setCount] = useState(0);

  console.log("Render App");

  return (
    <>
      <h1>Contador: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>

      <HijoA />
      <HijoB />
      <HijoC />
    </>
  );
}

export default App;
