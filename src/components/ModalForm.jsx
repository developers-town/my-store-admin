import React from "react";

const ModalForm = (props) => {
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="false"
      >
        <div className="modal-dialog">
          <div className="modal-content">{props.children}</div>
        </div>
      </div>
    </div>
  );
};
export default ModalForm;
