import React from 'react';
import { IconButton, Button } from "../";
import styles from "./NavBar.module.scss";
import { useHistory } from "react-router-dom";

function NavBar() {

    const history = useHistory();

    const handleIconClick = () => {
        history.push("/");
    }

    return (
        <nav className={styles.nav}>
            <IconButton type="button" icon="Logo" onClick={handleIconClick}/>
            <div className={styles.buttonAlign}>
                <Button type="button" secondary={true} children="로그인"/>
                <Button type="button" secondary={false} children="회원 가입"/>
            </div>
        </nav>
    )
}

export default NavBar;
