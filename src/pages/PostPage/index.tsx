import React from "react";
import { BiArrowBack } from "react-icons/bi";
import UserAvatarCircle from "../../components/UserAvatarCircle";
import { getPosts } from "../../redux/features/post/postSlice.ts";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store.ts";
import { RiMoreLine, RiChat3Line } from "react-icons/ri";
import { MdIosShare } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { LiaRedoAltSolid } from "react-icons/lia";
import { FaRegBookmark } from "react-icons/fa";

export default function PostPage() {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const posts = useSelector((state: RootState) => state.post);

  const post = posts.find((post) => post.id === Number(id));

  const [textAreaValue, setTextAreaValue] = React.useState<string>("");
  const [isTextAreaEmpty, setIsTextAreaEmpty] = React.useState<boolean>(true);

  const formatNumberToK = (value: number) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}K`;
    } else {
      return value;
    }
  };

  React.useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  React.useEffect(() => {
    if (textAreaValue.length > 0) {
      setIsTextAreaEmpty(false);
    } else {
      setIsTextAreaEmpty(true);
    }
  }, [textAreaValue]);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="pt-4">
      {/* Header */}
      <div className="flex justify-start items-center px-4 space-x-8">
        <Link to={`/home`}>
          <BiArrowBack className="text-xl cursor-pointer" />
        </Link>
        <h1 className="text-xl font-bold">Post</h1>
      </div>
      {/* Post */}
      <div className="flex flex-col justify-start items-center px-4 mt-7">
        <div className="flex space-x-3 items-center justify-between w-full">
          <div className="flex items-center space-x-3 text-sm">
            <UserAvatarCircle user={post.user!} />
            <div>
              <p className="font-bold">{post?.user?.fullName}</p>
              <p className="text-gray-600">@{post?.user?.username}</p>
            </div>
          </div>
          <RiMoreLine className="w-5 h-5 cursor-pointer" />
        </div>
        <p className="my-4 w-full">{post.content}</p>
        {/* Post Date and Time */}
        <div className="flex justify-start w-full space-x-1">
          <p className="text-gray-600 text-sm">
            {new Date().toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}{" "}
            ·{" "}
          </p>
          <p className="text-gray-600 text-sm">
            {new Date().toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "numeric",
            })}{" "}
            ·{" "}
          </p>
          <p className="text-gray-600 text-sm">
            <span className="font-bold text-black">
              {formatNumberToK(post.stats)}
            </span>{" "}
            views
          </p>
        </div>
        {/* Post Stats */}
        <div className="flex justify-between w-full mt-4 border border-gray-100 border-l-0 border-r-0 py-4">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-5 text-sm">
              <div className="flex items-center space-x-1">
                <p className="font-bold text-black">{post.likes}</p>
                <p className="text-gray-600">Likes</p>
              </div>

              <div className="flex items-center space-x-1">
                <p className="font-bold text-black">{post.comments}</p>
                <p className="text-gray-600">Comments</p>
              </div>

              <div className="flex items-center space-x-1">
                <p className="font-bold text-black">{post.shares}</p>
                <p className="text-gray-600">Shares</p>
              </div>

              <div className="flex items-center space-x-1">
                <p className="font-bold text-black">355</p>
                <p className="text-gray-600">Bookmarks</p>
              </div>
            </div>
          </div>
        </div>
        {/* Icons */}
        <div className="flex justify-between w-full mt-4 border-b border-b-gray-100 pb-4">
          <div className="flex items-center justify-around text-gray-600 w-full">
            <RiChat3Line className="w-5 h-5 cursor-pointer" />
            <LiaRedoAltSolid className="w-5 h-5 cursor-pointer" />
            <FaRegBookmark className="w-5 h-5 cursor-pointer" />
            <AiOutlineHeart className="w-6 h-6 cursor-pointer" />
            <MdIosShare className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
        {/* Post Your Reply */}
        <div className="flex justify-start items-center w-full">
          <UserAvatarCircle user={post.user!} />
          <textarea
            className="flex-1 h-20 rounded-lg p-4 border-none focus:outline-none resize-none text-xl"
            placeholder="Post your reply!"
            value={textAreaValue}
            onChange={(e) => setTextAreaValue(e.target.value)}
          ></textarea>
          <div className="flex justify-end mt-4">
            <button
              className="bg-primary text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-[#1a8cd8] disabled:bg-[#99CDF8] disabled:cursor-not-allowed"
              disabled={isTextAreaEmpty}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
