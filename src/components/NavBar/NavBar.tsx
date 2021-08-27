import React, { useState } from "react";
import { IconButton, Button } from "../";
import styles from "./NavBar.module.scss";
import { useHistory } from "react-router-dom";
import Modal from "../Modal/Modal";
import Login from "../Content/Login";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { signInAction, signOutAction } from "../../redux/storage/auth";
import { SubmitHandler } from "react-hook-form";

function NavBar() {
  const history = useHistory();
  const [isModalVisible, setModalVisibility] = useState(false);
  const { user, loggingIn } = useSelector(
    (state: RootStateOrAny) => state.auth
  );
  const dispatch = useDispatch();

  const openModal = () => {
    setModalVisibility(true);
  };

  const closeModal = () => {
    setModalVisibility(false);
  };

  const handleIconClick = () => {
    history.push("/");
  };

  type FormValues = {
    email: string;
    password: string;
  };

  const handleLogin: SubmitHandler<FormValues> = ({ email, password }) => {
    dispatch(signInAction(email, password));
    closeModal();
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.inner}>
          <IconButton type="button" icon="Logo" onClick={handleIconClick} />
          <div className={styles.buttonAlign}>
            {user ? (
              <Button
                type="button"
                secondary={true}
                children="로그아웃"
                onClick={() => dispatch(signOutAction())}
              />
            ) : (
              <>
                <Button
                  type="button"
                  secondary={true}
                  children="로그인"
                  onClick={openModal}
                />
                <Button type="button" secondary={false} children="회원 가입" />
              </>
            )}
          </div>
        </div>
      </nav>
      <Modal visible={isModalVisible} title="로그인" onClose={closeModal}>
        <Login handleLogin={handleLogin} />
      </Modal>
    </>
  );
}

export default NavBar;
