import React from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import Input from "../Input/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./Login.module.scss";

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <div>
      <form
        autoComplete="off"
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register("email")}
          id="emailInput"
          type="email"
          placeholder="이메일"
        />
        <input
          {...register("password")}
          id="passwordInput"
          type="password"
          placeholder="비밀번호"
        />
        <Button type="submit" secondary={false}>
          로그인
        </Button>
      </form>
    </div>
  );
};

export default Login;
