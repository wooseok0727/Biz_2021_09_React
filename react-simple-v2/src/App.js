import { useCallback, useState } from "react";
import "./App.css";
import CounterInput from "./comps/CounterInput";
import CounterView from "./comps/CounterView";

const App = () => {
  const [value, setValue] = useState("");

  const onChangeValue = useCallback((e) => {
    const num = parseInt(e.target.value);
    isNaN(num) ? setValue("") : setValue(num);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <CounterInput number={value} onChangeValue={onChangeValue} />
        <CounterView number={value} />
      </header>
    </div>
  );
};

export default App;
