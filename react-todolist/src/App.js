import React from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoMain from "./components/TodoMain";
import UserContextProvider from "./context/UserContextProvider";

const App = () => {
  return (
    <div className="App">
      <UserContextProvider>
        <Header />
        <TodoMain form={<TodoInput />}></TodoMain>
      </UserContextProvider>
    </div>
  );
};

export default App;
