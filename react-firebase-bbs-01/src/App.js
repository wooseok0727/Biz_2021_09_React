import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { BBsMain, Footer, Header, MainNav } from "./comps";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <MainNav />
        <section className="main_section">
          <BBsMain />
        </section>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
