import { useState } from "react";
import "./App.css";
import Todo from "./component/Todo";
import { Paper, List, Container } from "@material-ui/core";
import AddTodo from "./component/AddTodo";

function App() {
  const [list, setList] = useState({
    items: [],
  });

  const onAdd = (item) => {
    const thisItems = [...list.items];
    item.id = "ID-" + thisItems.length;
    item.done = false;
    thisItems.push(item);
    setList({ ...list, items: thisItems });
  };

  const onDelete = (item) => {
    const thisItems = [...list.items];
    const newItems = thisItems.filter((e) => e.id !== item.id);
    setList({ ...list, items: newItems });
  };

  const todoItems = list.items.length > 0 && (
    <Paper style={{ margin: 16 }}>
      <List>
        {list.items.map((item) => (
          <Todo item={item} key={item.id} onDelete={onDelete} />
        ))}
      </List>
    </Paper>
  );

  return (
    <div className="App">
      <Container maxWidth="md">
        <AddTodo add={onAdd} />
        <div className="TodoList">{todoItems}</div>
      </Container>
    </div>
  );
}

export default App;
