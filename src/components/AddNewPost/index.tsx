import { UserAvatarCircle } from "../index.tsx";
import icons from "./iconList.tsx";
import React from "react";
import { UserState } from "../../redux/features/user/userSlice.ts";
import { createOrUpdatePost } from "../../redux/features/post/postSlice.ts";
import { useDispatch } from "react-redux";

interface AddNewPostProps {
  user: UserState;
}

export default function AddNewPost({ user }: AddNewPostProps) {
  const dispatch = useDispatch();

  const [textAreaValue, setTextAreaValue] = React.useState<string>("");
  const [isTextAreaEmpty, setIsTextAreaEmpty] = React.useState<boolean>(true);

  const generateRandomNumberBetween = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      createOrUpdatePost({
        id: Math.floor(Math.random() * 1000),
        user: user,
        content: textAreaValue,
        likes: generateRandomNumberBetween(0, 100),
        comments: generateRandomNumberBetween(0, 100),
        shares: generateRandomNumberBetween(0, 100),
        stats: generateRandomNumberBetween(10000, 40000),
      })
    );

    setTextAreaValue("");
  };

  React.useEffect(() => {
    if (textAreaValue.length > 0) {
      setIsTextAreaEmpty(false);
    } else {
      setIsTextAreaEmpty(true);
    }
  }, [textAreaValue]);

  return (
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
      <form
        className="flex justify-between items-center mt-4 pl-10"
        onSubmit={handleSubmit}
      >
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
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-[#1a8cd8] cursor-pointer disabled:bg-[#99CDF8] disabled:cursor-not-allowed"
          disabled={isTextAreaEmpty}
        >
          Post
        </button>
      </form>
    </div>
  );
}
