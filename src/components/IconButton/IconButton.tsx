import React from 'react';
import classNames from "classnames";
import {Icon} from "../";
import { button } from "./IconButton.module.scss";

interface IconButtonProps extends React.HTMLProps<HTMLButtonElement> {
    type: "button" | "submit" | "reset";
    onClick?: () => void;
    className?: string;
}

function IconButton({ type, onClick, className}: IconButtonProps): JSX.Element {

    const styleClass = classNames(button, className);

    return (
        <button type={type} onClick={onClick} className={styleClass}> 
            <Icon />
        </button>
    )
}

export default IconButton;
