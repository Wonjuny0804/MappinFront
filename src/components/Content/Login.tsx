import Button from "../Button/Button";
import { useForm } from "react-hook-form";
import styles from "./Login.module.scss";
import { SubmitHandler } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
};

type LoginProps = {
  handleLogin: SubmitHandler<FormValues>;
};

const Login = ({ handleLogin }: LoginProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }, // 에러처리 추가
  } = useForm<FormValues>();

  return (
    <div>
      <form
        autoComplete="off"
        className={styles.form}
        onSubmit={handleSubmit(handleLogin)}
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
