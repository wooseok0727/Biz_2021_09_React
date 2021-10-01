import AppContextProvider02 from "../context/AppContextProvider02";
import "../css/TodoMain.css";

const TodoMain = ({ header, form, children }) => {
  return (
    <AppContextProvider02>
      <main className="main_box">
        <div className="main_title">{header}</div>
        <section className="form_wrapper">{form}</section>
        <section className="list_wrapper">{children}</section>
      </main>
    </AppContextProvider02>
  );
};

export default TodoMain;
