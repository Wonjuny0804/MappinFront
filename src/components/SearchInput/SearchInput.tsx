import React, { useRef } from "react";
import styles from "./SearchInput.module.scss";
import classNames from "classnames";

interface InputProps {
  name: String;
  id: String;
  type: String;
  icon: JSX.Element | false;
  secondary: boolean; 
  label?: String;
  customStyle?: Object;
  inputStyle?: Object;
  labelStyle?: Object;
  value?: string;
  [x: string]: any;
}

function SearchInput({
  id,
  type,
  icon,
  secondary,
  label,
  customStyle,
  inputStyle,
  labelStyle,
  value,
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
      className={secondary ? classNames(styles.inputWrapper, styles.result) : styles.inputWrapper}
      ref={wrapperRef}
      onClick={handleWrapperClick}
      style={customStyle}
    >
      {icon && icon}
      {!value && <label
        htmlFor={`${id}`}
        className={styles.label}
        ref={labelRef}
        style={labelStyle}
      >
        {label}
      </label>}
      <input
        autoComplete="off"
        type={`${type}`}
        id={`${id}`}
        minLength={2}
        className={secondary ? classNames(styles.resultInput, styles.input) : styles.input}
        style={inputStyle}
        ref={inputRef}
        onBlur={handleInputBlur}
        defaultValue={value}
        {...rest}
      />
    </div>
  );
}

export default SearchInput;
