import { WhoToFollowItem } from "../Sidebar/whoToFollow.ts";

interface UserProfileContainerProps {
  item: WhoToFollowItem;
}

export default function UserProfileContainer({
  item,
}: UserProfileContainerProps) {
  return (
    <div key={item.id} className="hover:bg-gray-100">
      <div className="flex items-center justify-between mt-6 pb-2 rounded-lg cursor-pointer">
        <div className="flex items-center space-x-3 text-sm">
          <div className="flex items-center justify-center p-2 bg-primary w-10 h-10 rounded-full">
            <span className="font-bold text-white">{item.name[0]}</span>
          </div>
          <div>
            <p className="font-bold">{item.name}</p>
            <p className="text-gray-600">@{item.username}</p>
          </div>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-[#272c30]">
          Follow
        </button>
      </div>
    </div>
  );
}
