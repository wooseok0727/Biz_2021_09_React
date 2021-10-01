import { useTodoContext } from "../context/AppContextProvider02";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todoList, onRemove, onCompClick } = useTodoContext();
  const viewList = todoList.map((item) => {
    // todo.t_text
    return (
      <TodoItem
        todo={item}
        key={item.t_id}
        onRemove={onRemove}
        onCompClick={onCompClick}
      />
    );
  });

  return <div>{viewList}</div>;
};

export default TodoList;
