import React from "react";
import { Button, Input, Logo } from "../../components";

export default function AuthPage() {
  const [isLogin, setIsLogin] = React.useState<boolean>(false);
  const [fullName, setFullName] = React.useState<string>("");
  const [username, setUsername] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLogin) {
      console.log("Login");
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
