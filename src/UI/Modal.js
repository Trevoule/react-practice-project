// import Button from "./Button";
import "./Modal.css";

const Modal = (props) => {
  const click = () => {
    props.onValid('')
  }

  return (
    <div className="backdrop">
      <div className="modal">
        <div className="modal-label">
          <h2>Invalid input</h2>
        </div>
        <div className="modal-info">{props.errorMessage}</div>
        <button type="button" className="modal-button" onClick={click}>Okay</button>
      </div>
    </div>
  );
};

export default Modal;
