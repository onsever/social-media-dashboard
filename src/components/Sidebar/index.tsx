import SearchBar from "../SearchBar";
import whatsHappeningItems from "./whatsHappeningItems.ts";
import whoToFollow from "./whoToFollow.ts";
import sidebarLinks from "./sidebarLinks.ts";
import TrendingItem from "../TrendingItem";
import UserProfileContainer from "../UserProfileContainer";

export default function Sidebar() {
  return (
    <aside className="p-2 py-3">
      <SearchBar />
      <div className="bg-[#F7F9F9] mt-4 rounded-lg py-2 px-4">
        <h3 className="font-bold text-lg">Subscribe to Premium</h3>
        <p className="text-sm font-bold mt-2">
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </p>
        <button className="bg-black text-white px-4 py-2 rounded-full font-bold text-sm mt-4 hover:bg-[#272c30]">
          Subscribe
        </button>
      </div>
      <div className="bg-[#F7F9F9] mt-4 rounded-lg">
        <h3 className="font-bold text-lg py-2 px-4">What's Happening</h3>
        {whatsHappeningItems.map((item) => (
          <TrendingItem key={item.subtitle} item={item} />
        ))}
        <span className="block text-primary text-sm hover:underline cursor-pointer py-2 mt-4 px-4 pb-4">
          Show more
        </span>
      </div>
      <div className="bg-[#F7F9F9] mt-4 rounded-lg py-2 px-4">
        <h3 className="font-bold text-lg">Who to follow</h3>
        {whoToFollow.map((item) => (
          <UserProfileContainer item={item} key={item.id} />
        ))}
        <span className="block text-primary text-sm hover:underline cursor-pointer py-2 mt-4">
          Show more
        </span>
      </div>
      {/* Sidebar Links */}
      <div className="mt-4">
        {sidebarLinks.map((link) => (
          <a
            key={link.title}
            href={link.link}
            className="text-xs text-gray-500 hover:underline ml-2 first:ml-0"
          >
            {link.title}
          </a>
        ))}
        <span className="text-xs text-gray-500 ml-2">&copy; 2023 X Corp.</span>
      </div>
    </aside>
  );
}
