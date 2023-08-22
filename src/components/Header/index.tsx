import Logo from "../Logo";
import { RiMoreLine } from "react-icons/ri";
import Button from "../Button";
import navLinks from "./navLinks.tsx";
import { getUser } from "../../redux/features/user/userSlice.ts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store.ts";
import React from "react";

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  React.useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <header className="p-2 py-3 relative">
      <Logo width={8} height={8} />
      <nav className="flex items-center justify-start my-6 space-x-4">
        <ul className="flex flex-col items-start justify-start space-y-8">
          {navLinks.map((link) => (
            <li
              key={link.title}
              className="flex items-center justify-center space-x-3 hover:bg-gray-200 rounded-full cursor-pointer"
            >
              {link.icon}
              <span className={`text-lg ${link.active && "font-bold"}`}>
                {link.title}
              </span>
            </li>
          ))}
        </ul>
      </nav>
      <Button text={"Post"} primary={true} />
      <div className="absolute bottom-5 right-0 left-0 flex space-x-3 items-center justify-between">
        <div className="flex items-center space-x-3 text-sm">
          <div className="flex items-center justify-center p-6 bg-primary w-10 h-10 rounded-full">
            <span className="font-bold text-white">
              {user.fullName.split(" ")[0][0]}
            </span>
          </div>
          <div>
            <p className="font-bold">{user.fullName}</p>
            <p className="text-gray-600">@{user.username}</p>
          </div>
        </div>
        <div>
          <RiMoreLine className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
