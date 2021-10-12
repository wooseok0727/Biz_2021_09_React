import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { UserContextProvider } from "./context";
import { TodoMain, TodoInput, TodoList } from "./components";
import { Header, LoginForm, Logout, AuthRoute } from "./components";

const App = () => {
  return (
    <div className="App">
      <UserContextProvider>
        <Header />
        <Route path="/" exact>
          {/* <AuthRoute> */}
          <TodoMain form={<TodoInput />}>
            <TodoList />
          </TodoMain>
          {/* </AuthRoute> */}
        </Route>
        <Route path="/login" exact component={LoginForm} />
        <Route path="/logout" exact component={Logout} />
      </UserContextProvider>
    </div>
  );
};

export default App;
