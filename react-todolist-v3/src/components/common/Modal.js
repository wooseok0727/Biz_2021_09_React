import { Button } from "../index";
import "../../css/Modal.css";

const Modal = ({ onConfirm, onCancel, title }) => {
  return (
    <div className="modal_wrap">
      <div className="modal_block">
        <h2>{title}</h2>
        <div className="buttons">
          {onCancel ? (
            <>
              <Button text="DELETE" onClick={onConfirm}>
                DELETE
              </Button>
              <Button text="CANCEL" onClick={onCancel}>
                CANCEL
              </Button>
            </>
          ) : (
            <Button text="OK" onClick={onConfirm}>
              OK
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
