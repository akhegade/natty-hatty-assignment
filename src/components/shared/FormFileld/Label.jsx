import React from "react";

function Label(props) {
  return <label {...props}>{props.label}:</label>;
}

export default Label;
