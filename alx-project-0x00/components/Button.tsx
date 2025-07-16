import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, style }) => {
  return (
    <button className={`px-4 py-2 text-white font-semibold ${style}`}>
      {title}
    </button>
  );
};

export default Button;
