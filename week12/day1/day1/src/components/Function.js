import { useState } from "react";
const FunctionalComponent = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Functions</h1>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Add</button>
      <button onClick={() => setCounter(counter - 1)}>Subtract</button>
    </div>
  );
};
export default FunctionalComponent;
