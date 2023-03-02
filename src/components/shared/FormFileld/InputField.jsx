import { Grid } from "@mui/material";
import React from "react";

const InputField = ({ inputType, value, name, className, onChange }) => {
  return (
    <input
      name={name}
      type={inputType ? inputType : "text"}
      value={value}
      className={className}
      onChange={onChange}
    />
  );
};

export default InputField;
