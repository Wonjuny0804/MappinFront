import React from "react";
import className from "classnames";
import styles from "./Button.module.scss";
import Icon from "../Icon/Icon";

interface ButtonProps {
  type: "submit" | "button" | "reset";
  secondary?: boolean;
  styling?: string;
  rounded?: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
  loading?: boolean;
  children?: string | Node | JSX.Element;
  onClick?: () => void;
}

function Button({
  type,
  secondary,
  rounded,
  disabled,
  name,
  value,
  styling,
  onClick,
  loading,
  children,
}: ButtonProps): JSX.Element {
  const btnStyle = className(
    secondary ? styles.secondary : styles.defaultBtn,
    rounded && styles.rounded,
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
      <span className={styles.container}>
        {children}
        <span className={styles.loading}>
          {loading && <Icon type="Spinner" />}
        </span>
      </span>
    </button>
  );
}

export default Button;
