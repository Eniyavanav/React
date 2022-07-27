import { useState } from "react";
import "./styles.css";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");
  return (
    <div className="App">
      <h1>
        Hello CodeSandbox I am ssEniyavan and My Id is {count} And my color is{" "}
        {color}
      </h1>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <button onClick={() => setColor("blue")}>Color</button>
    </div>
  );
}
export default App;
