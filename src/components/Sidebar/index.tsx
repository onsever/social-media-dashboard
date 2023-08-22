import SearchBar from "../SearchBar";
import { RiMoreLine } from "react-icons/ri";
import whatsHappeningItems from "./whatsHappeningItems.ts";
import whoToFollow from "./whoToFollow.ts";

const sidebarLinks = [
  {
    title: "Terms of Service",
    link: "/terms",
  },
  {
    title: "Privacy Policy",
    link: "/privacy",
  },
  {
    title: "Cookie Policy",
    link: "/cookie",
  },
  {
    title: "Accessibility",
    link: "/accessibility",
  },
  {
    title: "Ads info",
    link: "/ads",
  },
];

export default function Sidebar() {
  return (
    <aside className="p-2 py-3">
      <SearchBar />
      <div className="bg-[#F7F9F9] mt-4 rounded-lg py-2 px-4">
        <h3 className="font-bold text-lg">What's Happening</h3>
        {whatsHappeningItems.map((item) => (
          <div className="flex items-start justify-between mt-4 hover:bg-gray-100 rounded-lg cursor-pointer">
            <div>
              <span className="text-xs text-gray-500">{item.title}</span>
              <p className="font-bold text-sm">{item.subtitle}</p>
              <span className="text-xs text-gray-500">{item.posts}</span>
            </div>
            <RiMoreLine className="w-5 h-5 cursor-pointer" />
          </div>
        ))}
      </div>
      <div className="bg-[#F7F9F9] mt-4 rounded-lg py-2 px-4">
        <h3 className="font-bold text-lg">Who to follow</h3>
        {whoToFollow.map((item) => (
          <div className="flex items-center justify-between mt-6 pb-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <div className="flex items-center space-x-3 text-sm">
              <div className="flex items-center justify-center p-2 bg-primary w-10 h-10 rounded-full">
                <span className="font-bold text-white">{item.name[0]}</span>
              </div>
              <div>
                <p className="font-bold">{item.name}</p>
                <p className="text-gray-600">@{item.username}</p>
              </div>
            </div>
            <button className="bg-black text-white px-4 py-2 rounded-full font-bold text-sm">
              Follow
            </button>
          </div>
        ))}
      </div>
      {/* Sidebar Links */}
      <div className="mt-4">
        {sidebarLinks.map((link) => (
          <a
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
