import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BBsDetail, BBsMain, BBsWrite, Footer, Header, MainNav } from "./comps";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <MainNav />
        <Route exact path="/" component={BBsMain} />
        <Switch>
          <Route exact path="/write/:id" component={BBsWrite} />
          <Route exact path="/write" component={BBsWrite} />
          <Route exact path="/detail/:id" component={BBsDetail} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
