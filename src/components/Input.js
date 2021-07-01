import classNames from "classnames";
import { forwardRef, useImperativeHandle, useRef } from "react";

function Input({ className, value, onChange }, ref) {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));

  return (
    <div>
      <input
        className={className}
        ref={inputRef}
        type="text"
        name="item" 
        id="item"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

Input = forwardRef(Input);

export default Input;