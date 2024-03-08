import React from "react";
import clsx from "clsx";
const Input = React.forwardRef(
  ({ placeholder, value, onChange, name, id, type, error, label }, ref) => {
    return (
      <div>
        <label htmlFor="">{label}</label>
        <input
          className={clsx("",{})}
          ref={ref}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          id={id}
          type={type}
          error={error}
        />
      </div>
    );
  }
);

export default Input;
