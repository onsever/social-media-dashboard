import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthenticated } from "../../redux/features/auth/authSlice.ts";
import { createOrUpdateUser } from "../../redux/features/user/userSlice.ts";
import { Button, Input, Logo } from "../../components";

export default function AuthPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = React.useState<boolean>(false);
  const [fullName, setFullName] = React.useState<string>("");
  const [username, setUsername] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLogin) {
      const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

      if (storedUser.email === email && storedUser.password === password) {
        setErrorMessage("");
        dispatch(setAuthenticated(true));
        navigate("/home");
      } else {
        setErrorMessage("Invalid email or password");
      }
    }

    if (!isLogin) {
      if (!fullName || !username || !email || !password || !confirmPassword) {
        setErrorMessage("Please fill all fields");
        return;
      }

      if (password !== confirmPassword) {
        setErrorMessage("Password and Confirm Password must be the same");
        return;
      }

      dispatch(
        createOrUpdateUser({
          id: Math.floor(Math.random() * 1000),
          fullName,
          username,
          email,
          password,
        })
      );

      dispatch(setAuthenticated(true));
      setErrorMessage("");
      setIsLogin((prevState) => !prevState);
    }
  };

  React.useEffect(() => {
    setFullName("");
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }, [isLogin]);

  return (
    <div className="grid grid-cols-2 h-screen w-full">
      <div className="flex items-center justify-center w-full h-full">
        <Logo width={96} height={96} />
      </div>
      <div className="flex items-center justify-start w-full h-full pl-10">
        <div className="w-[350px]">
          {!isLogin ? (
            <form onSubmit={handleLogin}>
              <h1 className="text-[4rem] font-bold">Join today.</h1>
              {errorMessage && (
                <span className="text-red-500 text-xs leading-none block mt-2">
                  {errorMessage}
                </span>
              )}
              <Input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
                onClick={() => setIsLogin((prevState) => !prevState)}
              />
            </form>
          ) : (
            <form onSubmit={handleLogin}>
              <h1 className="text-[4rem] font-bold">Let's go.</h1>
              {errorMessage && (
                <span className="text-red-500 text-xs leading-none block my-2">
                  {errorMessage}
                </span>
              )}
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button primary text={"Sign in"} />
              <h2 className="mt-10 mb-4 font-bold">Don't have any account?</h2>
              <Button
                text={"Create account"}
                onClick={() => setIsLogin((prevState) => !prevState)}
              />
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
