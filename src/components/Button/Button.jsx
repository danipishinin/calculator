import React from "react";
import "./Button.css";

export default (props) => (
  <button
    onClick={(e) => props.onClick && props.onClick(e.label)}
    className={`
    button
    ${props.style}
`}
  >
    {props.label}
  </button>
);
