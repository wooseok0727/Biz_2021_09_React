import React from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoMain from "./components/TodoMain";
import UserContextProvider from "./context/UserContextProvider";
import "./App.css";
import { Route } from "react-router";
import LoginForm from "./components/LoginForm";
import Logout from "./components/Logout";

const App = () => {
  return (
    <div className="App">
      <UserContextProvider>
        <Header />
        <Route path="/" exact>
          <TodoMain form={<TodoInput />}>
            <TodoList />
          </TodoMain>
        </Route>
        <Route path="/login" exact component={LoginForm} />
        <Route path="/logout" exact component={Logout} />
      </UserContextProvider>
    </div>
  );
};

export default App;
