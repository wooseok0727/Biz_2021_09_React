import "../css/TodoMain.css";
import AppContextProvider from "../context/AppContextProvider";

const TodoMain = ({ header, form, children }) => {
  return (
    <AppContextProvider>
      <main className="main_box">
        <div className="main_title">{header}</div>
        <section className="form_wrapper">{form}</section>
        <section className="list_wrapper">{children}</section>
      </main>
    </AppContextProvider>
  );
};

export default TodoMain;
