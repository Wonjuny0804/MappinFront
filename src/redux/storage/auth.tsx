import axios from "axios";

const LOGIN_REQUEST = "로그인 요청";
const LOGIN_SUCCESS = "로그인 성공";
const LOGIN_FAILURE = "로그인 실패";
const LOGOUT = "로그아웃";

interface actionProps {
  type: String;
  user: Object;
}

const initialState = {
  loggedIn: false,
  loggingIn: false,
  user: null,
};

export const signOutAction = () => (dispatch: any) => {
  localStorage.removeItem("token");
  dispatch({ type: LOGOUT });
};

export const fetchProfile = () => {
  const token = localStorage.getItem("token");

  return (dispatch: any) => {
    if (token) {
      const option = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios
        .get("/api/v1/users/me", option)
        .then(({ data }) => {
          if (data.result !== "SUCCESS") {
            dispatch(signOutAction());
          }
          dispatch({ type: LOGIN_SUCCESS, user: data.data });
        })
        .catch((error) => dispatch({ type: LOGIN_FAILURE }));
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
      })
      .catch((err) => console.log(err));
  };
};

export function authReducer(state = initialState, action: actionProps) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case LOGIN_SUCCESS:
      return {
        loggingIn: false,
        loggedIn: true,
        user: action.user,
      };
    case LOGIN_FAILURE:
      return {};
    case LOGOUT:
      return {};
    default:
      return state;
  }
}
