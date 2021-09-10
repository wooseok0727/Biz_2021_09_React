import "./App.css";
import * as BBS from "./comps";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <BBS.Header />
        <BBS.MainNav />
        <Route path="/" component={BBS.BBsMain} exact />
        <Route path="/write" component={BBS.BBsWrite} exact />
        <Route path="/detail" component={BBS.BBsDetail} exact />
        <Route path="/login" />
        <Route path="/join" />
        <BBS.Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
