import { useCallback, useState } from "react";
import "./App.css";
import CounterBody from "./comps/CounterBody";

const App = () => {
  const [value, setValue] = useState("");

  const onChangeValue = useCallback((e) => {
    const num = parseInt(e.target.value);
    isNaN(num) ? setValue("") : setValue(num);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <CounterBody number={value} onChangeValue={onChangeValue} />
      </header>
    </div>
  );
};

export default App;
