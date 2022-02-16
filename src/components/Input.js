import React from "react";

function Input({ type, onKeyDown, placeholder }, ref) { // 1st three r regular props, n ref is 2nd argument
  return (
    <input
      ref={ref}
      type={type}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
    />
  ); // here input is regulaar input not a component
}

const forwardedInput = React.forwardRef(Input);

export default forwardedInput;
