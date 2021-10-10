import "../css/TodoMain.css";
import TodoContextProvider from "../context/TodoContextProvider";

const TodoMain = ({ form, children }) => {
  return (
    <TodoContextProvider>
      <main>
        <section className="form_wrapper">{form}</section>
        <section className="list_wrapper">{children}</section>
      </main>
    </TodoContextProvider>
  );
};

export default TodoMain;
