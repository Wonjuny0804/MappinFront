import React from "react";
import classNames from "classnames";
import { Icon } from "../";
import styles from "./IconButton.module.scss";

interface IconButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
}

function IconButton({
  type,
  onClick,
  className,
}: IconButtonProps): JSX.Element {
  const styleClass = classNames(styles.btn, className);

  return (
    <button type={type} onClick={onClick} className={styleClass}>
      <Icon type="Logo" />
    </button>
  );
}

export default IconButton;
