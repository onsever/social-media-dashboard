import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/features/user/userSlice.ts";
import { getPosts } from "../../redux/features/post/postSlice.ts";
import { RootState } from "../../redux/store.ts";
import { AddNewPost } from "../../components";
import PostItem from "../../components/PostItem";

export default function HomePage() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const posts = useSelector((state: RootState) => state.post);

  React.useEffect(() => {
    dispatch(getUser());
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <div className="pt-4 border-b border-b-gray-100">
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
      <AddNewPost user={user} />
      {/* Posts */}
      {posts &&
        posts.length > 0 &&
        user &&
        posts.map((post) => <PostItem post={post} user={user} key={post.id} />)}
    </>
  );
}
