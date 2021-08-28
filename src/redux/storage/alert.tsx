const MESSAGE_SUCCESS = "성공 알림";
const MESSAGE_ERROR = "에러 알림";
const MESSAGE_CLEAR = "알림 삭제";

interface actionProps {
  type: string;
  message: string;
}

export function success(message: string) {
  return { type: MESSAGE_SUCCESS, message };
}

export function error(message: string) {
  return { type: MESSAGE_ERROR, message };
}

export function clear() {
  return { type: MESSAGE_CLEAR };
}

export function alertReducer(state = {}, action: actionProps) {
  switch (action.type) {
    case MESSAGE_SUCCESS:
      return {
        type: "success",
        message: action.message,
      };
    case MESSAGE_ERROR:
      return {
        type: "error",
        message: action.message,
      };
    case MESSAGE_CLEAR:
      return {};
    default:
      return state;
  }
}
