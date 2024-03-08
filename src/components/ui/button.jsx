import React from "react";
import clsx from "clsx";

const Button = ({ variant, children }) => {
  return (
    <button
      className={clsx("p-[10px] text-white rounded-xl ", {
        "bg-primary": variant === "primary",
        "bg-secondary": variant === "secondary",
      })}
    >
      {children}
    </button>
  );
};

export default Button;
