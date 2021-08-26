import React, { useRef } from "react";

import styles from "./Input.module.scss";

interface InputProps {
  name: String;
  id: String;
  type: String;
  icon: JSX.Element | false;
  label?: String;
  customStyle?: Object;
  inputStyle?: Object;
  labelStyle?: Object;
  [x: string]: any;
}

function Input({
  id,
  type,
  icon,
  label,
  customStyle,
  inputStyle,
  labelStyle,
  rest,
}: InputProps): JSX.Element {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLLabelElement>(null);

  const handleWrapperClick = (): void => {
    if (labelRef.current) labelRef.current.style.display = "none";
    inputRef.current && inputRef.current.focus();
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
    if (e.target.value === "" && labelRef.current)
      labelRef.current.style.display = "block";
  };

  return (
    <div
      className={styles.inputWrapper}
      ref={wrapperRef}
      onClick={handleWrapperClick}
      style={customStyle}
    >
      {icon && icon}
      <label
        htmlFor={`${id}`}
        className={styles.label}
        ref={labelRef}
        style={labelStyle}
      >
        {label}
      </label>
      <input
        {...rest}
        autoComplete="off"
        type={`${type}`}
        id={`${id}`}
        minLength={2}
        className={styles.input}
        style={inputStyle}
        ref={inputRef}
        onBlur={handleInputBlur}
      />
    </div>
  );
}

export default Input;
