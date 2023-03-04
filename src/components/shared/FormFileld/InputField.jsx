import { Grid } from "@mui/material";
import React from "react";

const InputField = ({ inputType, value, name, className, onChange }) => {
  return (
    <input
      name={name}
      type={inputType ? inputType : "text"}
      value={value}
      className={`w-full h-7 outline-none border-t border-r border-b border-l rounded-sm border-[#C7C7C7] ${className}`}
      onChange={onChange}
    />
  );
};

export default InputField;
