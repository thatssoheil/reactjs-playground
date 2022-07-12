import {Fragment} from "react";
import ReactDOM from "react-dom/client";

const Modal = ({modalStatus, toggle}) => modalStatus ? ReactDOM.createPortal(
    <Fragment>
        <div className="modal-overlay"/>
        <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role={"dialog"}>
            <div className="modal">
                <div className="modal-header">
                    <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close"
                            onClick={toggle}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>Hello, world!</p>
                </div>
            </div>
        </div>
    </Fragment>, document.body
) : null;

export default Modal;