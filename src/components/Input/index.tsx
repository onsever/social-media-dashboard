import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: React.InputHTMLAttributes<HTMLInputElement>["type"];
  placeholder: string;
}

export default function Input(props: InputProps) {
  return (
    <label className="w-full">
      <input
        className="w-full px-2 py-3.5 rounded-lg outline-primary mb-4 border border-gray-300"
        {...props}
        type={props.type}
        placeholder={props.placeholder}
      />
    </label>
  );
}
