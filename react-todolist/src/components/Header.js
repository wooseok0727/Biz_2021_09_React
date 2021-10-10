import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContextProvider";
import Button from "./Button";
import "../css/Header.css";

const Header = ({ title }) => {
  const { user } = useUserContext();
  return (
    <>
      <header>
        <div className="wrapper">
          <div className="logo_box">
            <Link to="/" className="logo">
              TODOs
            </Link>
          </div>
          {user?.userid ? (
            <nav className="main_nav">
              <div className="user_info">{user.userid}</div>
              <Button text="LOGOUT">LOGOUT</Button>
            </nav>
          ) : (
            <nav className="main_nav">
              <Button text="JOIN">
                <Link to="/join">JOIN</Link>
              </Button>
              <Button text="LOGIN">
                <Link to="/login">LOGIN</Link>
              </Button>
            </nav>
          )}
        </div>
      </header>
      <div className="sub_title">TODOLIST</div>
    </>
  );
};

export default Header;
