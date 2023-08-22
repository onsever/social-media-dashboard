import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  primary?: boolean;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={
        props.primary
          ? "bg-primary px-4 py-3 rounded-full text-white font-bold w-full"
          : "bg-white px-4 py-3 rounded-full text-primary font-bold w-full border border-gray-300"
      }
      {...props}
    >
      {props.text}
    </button>
  );
}
