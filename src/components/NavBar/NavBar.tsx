import React, { useState } from "react";
import { IconButton, Button } from "../";
import styles from "./NavBar.module.scss";
import { useHistory } from "react-router-dom";
import Modal from "../Modal/Modal";
import Login from "../Content/Login";

function NavBar() {
  const history = useHistory();
  const [isModalVisible, setModalVisibility] = useState(false);

  const openModal = () => {
    setModalVisibility(true);
  };

  const closeModal = () => {
    setModalVisibility(false);
  };

  const handleIconClick = () => {
    history.push("/");
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.inner}>
          <IconButton type="button" icon="Logo" onClick={handleIconClick} />
          <div className={styles.buttonAlign}>
            <Button
              type="button"
              secondary={true}
              children="로그인"
              onClick={openModal}
            />
            <Button type="button" secondary={false} children="회원 가입" />
          </div>
        </div>
      </nav>
      <Modal visible={isModalVisible} title="로그인" onClose={closeModal}>
        <Login />
      </Modal>
    </>
  );
}

export default NavBar;
