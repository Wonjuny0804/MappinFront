import React from "react";
import className from "classnames";
import styles from "./Button.module.scss";

interface ButtonProps {
  type: "submit" | "button" | "reset";
  secondary: boolean;
  styling?: string;
  disabled?: boolean;
  name?: string;
  value?: string;
  children?: string | Node;
  onClick?: () => void;
}

function Button({
  type,
  secondary,
  disabled,
  name,
  value,
  styling,
  onClick,
  children,
}: ButtonProps): JSX.Element {
  const btnStyle = className(
    secondary ? styles.secondary : styles.defaultBtn,
    styling
  );

  return (
    <button
      type={type}
      disabled={disabled}
      name={name}
      value={value}
      className={btnStyle}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
