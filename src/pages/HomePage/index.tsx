import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/features/user/userSlice.ts";
import icons from "./iconList.tsx";
import { RootState } from "../../redux/store.ts";
import { UserAvatarCircle } from "../../components";

export default function HomePage() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const [textAreaValue, setTextAreaValue] = React.useState<string>("");
  const [isTextAreaEmpty, setIsTextAreaEmpty] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (textAreaValue.length > 0) {
      setIsTextAreaEmpty(false);
    } else {
      setIsTextAreaEmpty(true);
    }
  }, [textAreaValue]);

  React.useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      <div className="pt-4 border-b border-b-gray-300">
        <h1 className="text-xl font-bold px-4">Home</h1>
        <div className="flex justify-around mt-4">
          <span className="font-bold text-sm cursor-pointer hover:bg-gray-200 w-full p-4 text-center underline decoration-primary underline-offset-[17px] decoration-4">
            For you
          </span>
          <span className="font-semibold text-gray-500 text-sm cursor-pointer hover:bg-gray-200 w-full p-4 text-center">
            Following
          </span>
        </div>
      </div>
      {/* Add New Post */}
      <div className="p-4 pb-2 border-b border-b-gray-300">
        <div className="flex space-x-3">
          <UserAvatarCircle user={user} />
          <textarea
            className="w-full h-24 rounded-lg border-none focus:outline-none text-xl resize-none"
            placeholder="What's happening?!"
            value={textAreaValue}
            onChange={(e) => setTextAreaValue(e.target.value)}
          />
        </div>
        {/* Icons */}
        <div className="flex justify-between items-center mt-4 pl-10">
          <div className="flex text-primary">
            <div className="flex">
              {icons.map((icon) => (
                <div
                  key={icon.id}
                  className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-primaryLight cursor-pointer"
                >
                  {icon.icon}
                </div>
              ))}
            </div>
          </div>
          <button
            className="bg-primary text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-[#1a8cd8] cursor-pointer disabled:bg-[#99CDF8] disabled:cursor-not-allowed"
            disabled={isTextAreaEmpty}
          >
            Post
          </button>
        </div>
      </div>
    </>
  );
}
