import "../css/Button.css";

const Button = ({ children, text, onClick }) => {
  return (
    <div className="btn_box">
      <span className="mask">{text}</span>
      <button onClick={onClick}>{children}</button>
    </div>
  );
};

export default Button;
