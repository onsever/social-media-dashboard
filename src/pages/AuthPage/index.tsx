import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authReducer, initialState } from "./reducer.ts";
import { setAuthenticated } from "../../redux/features/auth/authSlice.ts";
import { createOrUpdateUser } from "../../redux/features/user/userSlice.ts";
import { Button, Input, Logo } from "../../components";
import { RootState } from "../../redux/store.ts";

export default function AuthPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, dispatchState] = React.useReducer(authReducer, initialState);
  const auth = useSelector((state: RootState) => state.auth);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (state.isLogin) {
      const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

      if (
        storedUser.email === state.email &&
        storedUser.password === state.password
      ) {
        dispatch(setAuthenticated(true));
        navigate("/home");
      } else {
        dispatchState({
          type: "SET_ERROR_MESSAGE",
          message: "Invalid email or password",
        });
      }
    } else {
      if (
        !state.fullName ||
        !state.username ||
        !state.email ||
        !state.password ||
        !state.confirmPassword
      ) {
        dispatchState({
          type: "SET_ERROR_MESSAGE",
          message: "Please fill all fields",
        });
        return;
      }

      if (state.password !== state.confirmPassword) {
        dispatchState({
          type: "SET_ERROR_MESSAGE",
          message: "Password and Confirm Password must be the same",
        });
        return;
      }

      dispatch(
        createOrUpdateUser({
          id: Math.floor(Math.random() * 1000),
          fullName: state.fullName,
          username: state.username,
          email: state.email,
          password: state.password,
        })
      );

      dispatch(setAuthenticated(true));
      dispatchState({
        type: "SET_ERROR_MESSAGE",
        message: "",
      });

      dispatchState({
        type: "TOGGLE_LOGIN",
        payload: false,
      });
    }
  };

  React.useEffect(() => {
    dispatchState({ type: "RESET_FIELDS" });
  }, [state.isLogin]);

  React.useEffect(() => {
    if (auth.isAuthenticated) {
      navigate("/home");
    }
  }, [auth, navigate]);

  return (
    <div className="grid grid-cols-2 h-screen w-full">
      <div className="flex items-center justify-center w-full h-full">
        <Logo width={96} height={96} />
      </div>
      <div className="flex items-center justify-start w-full h-full pl-10">
        <div className="w-[350px]">
          {!state.isLogin ? (
            <form onSubmit={handleLogin}>
              <h1 className="text-[4rem] font-bold">Join today.</h1>
              {state.errorMessage && (
                <span className="text-red-500 text-xs leading-none block mt-2">
                  {state.errorMessage}
                </span>
              )}
              <Input
                type="text"
                placeholder="Full Name"
                value={state.fullName}
                onChange={(e) =>
                  dispatchState({
                    type: "UPDATE_FIELD",
                    field: "fullName",
                    value: e.target.value,
                  })
                }
              />
              <Input
                type="text"
                placeholder="Username"
                value={state.username}
                onChange={(e) =>
                  dispatchState({
                    type: "UPDATE_FIELD",
                    field: "username",
                    value: e.target.value,
                  })
                }
              />
              <Input
                type="email"
                placeholder="Email"
                value={state.email}
                onChange={(e) =>
                  dispatchState({
                    type: "UPDATE_FIELD",
                    field: "email",
                    value: e.target.value,
                  })
                }
              />
              <Input
                type="password"
                placeholder="Password"
                value={state.password}
                onChange={(e) =>
                  dispatchState({
                    type: "UPDATE_FIELD",
                    field: "password",
                    value: e.target.value,
                  })
                }
              />
              <Input
                type="password"
                placeholder="Confirm Password"
                value={state.confirmPassword}
                onChange={(e) =>
                  dispatchState({
                    type: "UPDATE_FIELD",
                    field: "confirmPassword",
                    value: e.target.value,
                  })
                }
              />
              <Button primary text={"Create account"} />
              <span className="text-xs leading-none block mt-2">
                By signing up, you agree to the{" "}
                <span className="text-[#1d9bf0]">Terms of Service</span> and{" "}
                <span className="text-[#1d9bf0]">Privacy Policy</span>,
                including <span className="text-[#1d9bf0]">Cookie Use</span>.
              </span>
              <h2 className="mt-10 mb-4 font-bold">Already have an account?</h2>
              <Button
                text={"Sign in"}
                onClick={() =>
                  dispatchState({ type: "TOGGLE_LOGIN", payload: true })
                }
              />
            </form>
          ) : (
            <form onSubmit={handleLogin}>
              <h1 className="text-[4rem] font-bold">Let's go.</h1>
              {state.errorMessage && (
                <span className="text-red-500 text-xs leading-none block my-2">
                  {state.errorMessage}
                </span>
              )}
              <Input
                type="email"
                placeholder="Email"
                value={state.email}
                onChange={(e) =>
                  dispatchState({
                    type: "UPDATE_FIELD",
                    field: "email",
                    value: e.target.value,
                  })
                }
              />
              <Input
                type="password"
                placeholder="Password"
                value={state.password}
                onChange={(e) =>
                  dispatchState({
                    type: "UPDATE_FIELD",
                    field: "password",
                    value: e.target.value,
                  })
                }
              />
              <Button primary text={"Sign in"} />
              <h2 className="mt-10 mb-4 font-bold">Don't have any account?</h2>
              <Button
                text={"Create account"}
                onClick={() =>
                  dispatchState({ type: "TOGGLE_LOGIN", payload: false })
                }
              />
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
