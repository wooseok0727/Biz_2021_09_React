import logo from "./logo.svg";
import "./App.css";
import TodoMain from "./comps/TodoMain";
import TodoList from "./comps/TodoList";
import TodoInput from "./comps/TodoInput";
import MyButton from "./comps/MyButton";
import HomeButton from "./comps/HomeButton";
import CompButton from "./comps/CompButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* TodoMain.jsx Layout을 사용하여 TODO 화면을 구현 */}
      <TodoMain form={<TodoInput />} header="오늘 할 일">
        <TodoList />
      </TodoMain>

      <MyButton />
      <HomeButton />
      <CompButton onClick={() => alert("우리집")}>우리집</CompButton>
      <CompButton>서울로</CompButton>
      <CompButton>제주로</CompButton>
      <CompButton>미국으로</CompButton>
      <CompButton>북극으로</CompButton>
    </div>
  );
}

export default App;
