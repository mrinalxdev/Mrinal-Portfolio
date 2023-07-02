"use client";

import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  black?: boolean;
  icon?: IconType;
}
const Button = ({ black, onClick, label, icon: Icon }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex justify-between px-1 pl-4 items-center gap-4 py-[5px] rounded-full ${
        black ? "bg-black text-white" : "bg-gray-300"
      }`}
    >
      {label}
      {Icon && <Icon size={28} />}
    </button>
  );
};

export default Button;
