import React from "react";
import Logo from "../Logo";
import { RiMoreLine } from "react-icons/ri";
import Button from "../Button";
import navLinks from "./navLinks.tsx";
import { getUser } from "../../redux/features/user/userSlice.ts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store.ts";
import UserAvatarCircle from "../UserAvatarCircle";
import { setAuthenticated } from "../../redux/features/auth/authSlice.ts";
import Modal from "../Modal";

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const [isMoreIconClicked, setIsMoreIconClicked] =
    React.useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const handleLogout = () => {
    dispatch(setAuthenticated(false));
  };

  React.useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
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
        <Button
          text={"Post"}
          primary={true}
          onClick={() => {
            setIsModalVisible(true);
          }}
        />
        <div className="absolute bottom-6 right-0 left-0 flex space-x-3 items-center justify-between">
          <div className="flex items-center space-x-3 text-sm">
            <UserAvatarCircle user={user} />
            <div>
              <p className="font-bold">{user.fullName}</p>
              <p className="text-gray-600">@{user.username}</p>
            </div>
          </div>
          <div
            className="flex items-center relative"
            onClick={() => setIsMoreIconClicked((prevState) => !prevState)}
          >
            <RiMoreLine className="w-5 h-5 cursor-pointer" />
            {isMoreIconClicked && (
              <div className="absolute right-0 -top-10 bg-white shadow-lg rounded-lg w-32">
                <ul className="flex flex-col">
                  <li
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
      <Modal
        isVisible={isModalVisible}
        onClose={handleModalClose}
        user={user}
      />
    </>
  );
}
