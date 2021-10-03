import "../css/Modal.css";
import { useAddrContext } from "../context/AppContextProvider";

const InputModal = ({ onConfirm, onCancel, message }) => {
  const { addr, onChange } = useAddrContext();

  return (
    <div className="modal_warp">
      <div className="modal_block input">
        <div className="message">{message}</div>
        <div className="input_box">
          <label>Name</label>
          <input
            name="a_name"
            value={addr.a_name}
            onChange={onChange}
            autoComplete="off"
          />
        </div>
        <div className="input_box">
          <label>Addr</label>
          <input
            name="a_addr"
            value={addr.a_addr}
            onChange={onChange}
            autoComplete="off"
          />
        </div>
        <div className="input_box">
          <label>Tel</label>
          <input
            name="a_tel"
            value={addr.a_tel}
            onChange={onChange}
            autoComplete="off"
          />
        </div>
        <div className="input_box">
          <label>Age</label>
          <input
            name="a_age"
            value={addr.a_age}
            onChange={onChange}
            autoComplete="off"
          />
        </div>

        <div className="buttons">
          <button onClick={onConfirm}>확인</button>
          <button onClick={onCancel}>취소</button>
        </div>
      </div>
    </div>
  );
};

export default InputModal;
