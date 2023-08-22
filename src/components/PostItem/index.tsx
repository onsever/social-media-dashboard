import React from "react";
import { UserAvatarCircle } from "../index.tsx";
import { PostState } from "../../redux/features/post/postSlice.ts";
import { UserState } from "../../redux/features/user/userSlice.ts";
import { RiMoreLine, RiChat3Line } from "react-icons/ri";
import { LiaRedoAltSolid } from "react-icons/lia";
import { AiOutlineHeart } from "react-icons/ai";
import { IoMdStats } from "react-icons/io";
import { MdIosShare } from "react-icons/md";
import {
  deletePost,
  createOrUpdatePost,
} from "../../redux/features/post/postSlice.ts";
import { useDispatch } from "react-redux";

interface PostItemProps {
  post: PostState;
  user: UserState;
}

export default function PostItem({ post, user }: PostItemProps) {
  const dispatch = useDispatch();

  const [isMoreIconClicked, setIsMoreIconClicked] =
    React.useState<boolean>(false);
  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);

  const formatNumberToK = (value: number) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}K`;
    } else {
      return value;
    }
  };

  const handleDeletePost = (id: number | string) => {
    dispatch(deletePost(id));
  };

  const handleEditPost = (id: number | string) => {
    dispatch(
      createOrUpdatePost({
        id: id,
        user: user,
        content: "edited content",
        likes: post.likes,
        stats: post.stats,
        comments: post.comments,
        shares: post.shares,
      })
    );
  };

  return (
    <div className="mt-4 px-4 flex border-b border-b-gray-300 pb-4">
      <div>
        <UserAvatarCircle user={user} />
      </div>
      <div>
        <div className="ml-4">
          <div className="flex justify-between">
            <div className="flex items-center">
              <span className="font-bold">{user.fullName}</span>
              <span className="text-gray-500 ml-1">@{user.username}</span>
              <span className="text-gray-500 ml-1">·</span>
              <span className="text-gray-500 ml-1">1h</span>
            </div>
            <div
              className="flex items-center relative"
              onClick={() => setIsMoreIconClicked((prevState) => !prevState)}
            >
              <RiMoreLine className="text-gray-500 text-xl cursor-pointer" />
              {isMoreIconClicked && (
                <div className="absolute right-0 top-5 bg-white shadow-lg rounded-lg w-32">
                  <ul className="flex flex-col">
                    <li
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleEditPost(post.id)}
                    >
                      Edit
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleDeletePost(post.id)}
                    >
                      Delete
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="mt-1">
            <p>{post.content}</p>
          </div>
        </div>
        {/* Icons Container */}
        <div className="ml-2 mt-3 flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center hover:bg-primaryLight cursor-pointer p-2 rounded-full">
              <RiChat3Line className="text-gray-500 text-xl cursor-pointer" />
              <span className="text-gray-500 ml-2 text-sm">
                {post.comments}
              </span>
            </div>
            <div className="flex items-center ml-8 hover:bg-green-100 cursor-pointer p-2 rounded-full">
              <LiaRedoAltSolid className="text-gray-500 text-xl cursor-pointer" />
              <span className="text-gray-500 ml-2 text-sm">{post.shares}</span>
            </div>
            <div className="flex items-center ml-8 hover:bg-red-100 cursor-pointer p-2 rounded-full">
              <AiOutlineHeart className="text-gray-500 text-xl cursor-pointer" />
              <span className="text-gray-500 ml-2 text-sm">{post.likes}</span>
            </div>
            <div className="flex items-center ml-8 hover:bg-primaryLight cursor-pointer p-2 rounded-full">
              <IoMdStats className="text-gray-500 text-xl cursor-pointer" />
              <span className="text-gray-500 ml-2 text-sm">
                {formatNumberToK(post.stats)}
              </span>
            </div>
          </div>
          <div className="flex items-center ml-8 hover:bg-primaryLight cursor-pointer p-2 rounded-full">
            <MdIosShare className="text-gray-500 text-xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
