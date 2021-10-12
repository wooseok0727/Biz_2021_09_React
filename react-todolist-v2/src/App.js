import React from "react";
import "./App.css";
import { Route } from "react-router";
import { UserContextProvider } from "./context";
import { TodoMain, TodoInput, TodoList } from "./components";
import { Header, LoginForm, Logout } from "./components";

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
