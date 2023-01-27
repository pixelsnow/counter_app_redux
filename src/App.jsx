import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const minusFive = () => {
    setCount((count) => count - 5);
  };

  const minusOne = () => {
    setCount((count) => count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const plusOne = () => {
    setCount((count) => count + 1);
  };

  const plusFive = () => {
    setCount((count) => count + 5);
  };

  return (
    <div className="App">
      <h1>Redux counter</h1>
      <section className="counter_container">
        <div className="counter">
          <h2>{count}</h2>
        </div>
        <div className="buttons_container">
          <button onClick={minusFive}>-5</button>
          <button onClick={minusOne}>-1</button>
          <button onClick={reset}>Reset</button>
          <button onClick={plusOne}>+1</button>
          <button onClick={plusFive}>+5</button>
        </div>
      </section>
    </div>
  );
}

export default App;
