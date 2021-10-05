import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/LoginForm";
import MainNav from "./components/MainNav";

const navList = [
  { id: 0, title: "Home", link: "/" },
  { id: 1, title: "Notice", link: "/notice" },
  { id: 2, title: "Board", link: "/board" },
  { id: 3, title: "Login", link: "/login", align: true },
  { id: 4, title: "Join", link: "/join" },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <MainNav navList={navList}>
        <LoginForm />
      </MainNav>
    </div>
  );
}

export default App;
