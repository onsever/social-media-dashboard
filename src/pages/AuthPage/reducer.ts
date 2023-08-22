type AuthState = {
  isLogin: boolean;
  fullName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  errorMessage: string;
};

type AuthAction =
  | { type: "TOGGLE_LOGIN"; payload: boolean }
  | { type: "UPDATE_FIELD"; field: string; value: string }
  | { type: "SET_ERROR_MESSAGE"; message: string }
  | { type: "RESET_FIELDS" };

const initialState: AuthState = {
  isLogin: false,
  fullName: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  errorMessage: "",
};

const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case "TOGGLE_LOGIN":
      return {
        ...state,
        isLogin: action.payload,
      };
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "SET_ERROR_MESSAGE":
      return {
        ...state,
        errorMessage: action.message,
      };
    case "RESET_FIELDS":
      return {
        ...state,
        fullName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        errorMessage: "",
      };
    default:
      return state;
  }
};

export { initialState, authReducer };
