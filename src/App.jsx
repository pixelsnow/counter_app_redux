import { useSelector } from "react-redux";
import { selectCounter } from "./features/counter/CounterSlice";

import "./App.css";

function App() {
  const count = useSelector(selectCounter);

  const minusFive = () => {};

  const minusOne = () => {};

  const reset = () => {};

  const plusOne = () => {};

  const plusFive = () => {};

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
