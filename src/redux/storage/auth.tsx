import axios from "axios";
import { authHeader } from "../../utils/auth";
import { clear, error, success } from "./alert";

const LOGIN_REQUEST = "로그인 요청";
const LOGIN_SUCCESS = "로그인 성공";
const LOGIN_FAILURE = "로그인 실패";

const PROFILE_REQUEST = "프로필 요청";
const LOGOUT = "로그아웃";

interface actionProps {
  type: String;
  user: Object;
}

const initialState = {
  loggedIn: false,
  loggingIn: false,
  loadingProfile: false,
  user: null,
};

export const signOutAction = () => (dispatch: any) => {
  localStorage.removeItem("token");
  dispatch({ type: LOGOUT });
  dispatch(success("성공적으로 로그아웃 되었습니다"));
  setTimeout(() => {
    dispatch(clear());
  }, 3000);
};

export const fetchProfile = () => {
  return (dispatch: any) => {
    dispatch({ type: PROFILE_REQUEST });
    const option = {
      headers: {
        Authorization: authHeader(),
      },
    };
    if (authHeader()) {
      axios
        .get("/api/v1/users/me", option)
        .then(({ data }) => {
          if (data.result !== "SUCCESS") {
            dispatch(signOutAction());
          } else if (data.result === "SUCCESS")
            dispatch({ type: LOGIN_SUCCESS, user: data.data });
        })
        .catch((err) => {
          dispatch({
            type: LOGIN_FAILURE,
          });
          dispatch(error("프로필 정보 요청중 에러가 발생했습니다"));
          setTimeout(() => {
            dispatch(clear());
          }, 3000);
        });
    }
  };
};

export const signInAction = (email: string, password: string) => {
  return (dispatch: any) => {
    dispatch({ type: LOGIN_REQUEST });
    const option = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    };

    axios
      .post(`/api/v1/auth/login`, JSON.stringify({ email, password }), option)
      .then(({ data }) => {
        localStorage.setItem("token", data.data.token);
        dispatch(fetchProfile());
        dispatch(success("성공적으로 로그인 되었습니다"));
        setTimeout(() => {
          dispatch(clear());
        }, 3000);
      })
      .catch((err) => {
        dispatch(error("유저 정보를 찾을수 없습니다"));
        setTimeout(() => {
          dispatch(clear());
        }, 3000);
      });
  };
};

export function authReducer(state = initialState, action: actionProps) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        loggingIn: true,
      };
    case LOGIN_SUCCESS:
      return {
        loggingIn: false,
        loggedIn: true,
        loadingProfile: true,
        user: action.user,
      };
    case PROFILE_REQUEST:
      return {
        loadingProfile: true,
      };
    case LOGIN_FAILURE:
      return {};
    case LOGOUT:
      return {};
    default:
      return state;
  }
}
