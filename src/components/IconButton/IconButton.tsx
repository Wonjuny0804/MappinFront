import React from "react";
import classNames from "classnames";
import { Icon } from "../";
import { IconProps } from "../Icon/Icon";
import styles from "./IconButton.module.scss";

interface IconButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type: "button" | "submit" | "reset";
  icon: IconProps["type"];
  onClick?: (e: any) => void;
  className?: string;
  style?: React.CSSProperties;
}

function IconButton({
  type,
  onClick,
  className,
  icon,
  style,
}: IconButtonProps): JSX.Element {
  const styleClass = classNames(className, styles.btn);

  return (
    <button style={style} type={type} onClick={onClick} className={styleClass}>
      <Icon type={icon} />
    </button>
  );
}

export default IconButton;
