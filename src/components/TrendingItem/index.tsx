import { RiMoreLine } from "react-icons/ri";
import { WhatsHappeningItem } from "../Sidebar/whatsHappeningItems.ts";

interface TrendingItemProps {
  item: WhatsHappeningItem;
}

export default function TrendingItem({ item }: TrendingItemProps) {
  return (
    <div key={item.subtitle} className="hover:bg-gray-100 px-4">
      <div className="flex items-start justify-between mt-4 rounded-lg cursor-pointer">
        <div>
          <span className="text-xs text-gray-500">{item.title}</span>
          <p className="font-bold text-sm">{item.subtitle}</p>
          <span className="text-xs text-gray-500">{item.posts}</span>
        </div>
        <RiMoreLine className="w-5 h-5 cursor-pointer" />
      </div>
    </div>
  );
}
