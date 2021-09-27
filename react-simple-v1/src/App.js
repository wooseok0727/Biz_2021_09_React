import React, { useState } from "react";
import "./App.css";
import CounterView from "./comps/CounterView";

const App = () => {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  };
  const decrement = () => {
    setValue(value - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <CounterView
          value={value}
          increment={increment}
          decrement={decrement}
        />
      </header>
    </div>
  );
};

export default App;
