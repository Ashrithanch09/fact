import React from "react";
import "./style.css";

const Confirmation = (props) => {
  return (
    <div className="confirmation-box">
      <div className="conf-message">
        <p>Are you sure you want to delete?</p>
      </div>
      <div className="confirmation-button">
        <button className="conf-cancel" onClick={props.onCancled}>
          No
        </button>
        <button className="conf-delete" onClick={props.onDelete}>
          Yes
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
