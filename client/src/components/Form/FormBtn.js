import React from "react";

export const FormBtn = props => (
  <button {...props} onClick={props.handleFormSubmit} className="btn btn-success">
    {props.children}
  </button>
);