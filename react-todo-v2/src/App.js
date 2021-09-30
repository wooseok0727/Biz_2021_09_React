import "./App.css";
import TodoMain from "./comps/TodoMain";
import TodoInput from "./comps/TodoInput";
import TodoList from "./comps/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoMain form={<TodoInput />} header="오늘할일">
          <TodoList />
        </TodoMain>
      </header>
    </div>
  );
}

export default App;
