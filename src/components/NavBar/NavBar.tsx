import React from 'react';
import { IconButton, Button } from "../";
import styles from "./NavBar.module.scss";

function NavBar() {
    return (
        <nav className={styles.nav}>
            <IconButton type="button" icon="Logo"/>
            <div className={styles.buttonAlign}>
                <Button type="button" secondary={true} children="로그인"/>
                <Button type="button" secondary={false} children="회원 가입"/>
            </div>
        </nav>
    )
}

export default NavBar;
