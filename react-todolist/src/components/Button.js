import "../css/Button.css";

const Button = ({ children, text }) => {
  return (
    <div className="btn_box">
      <span className="mask">{text}</span>
      <button>{children}</button>
    </div>
  );
};

export default Button;
