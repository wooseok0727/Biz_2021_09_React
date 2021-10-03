import "./App.css";
import AddrMain from "./components/AddrMain";
import AppContextProvider from "./context/AppContextProvider";

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <AddrMain />
      </AppContextProvider>
    </div>
  );
}

export default App;
