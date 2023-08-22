import React from "react";
import { RiSearchLine } from "react-icons/ri";

export default function SearchBar() {
  const [isFocused, setIsFocused] = React.useState<boolean>(false);

  return (
    <div
      className={`${
        isFocused ? "bg-white" : "bg-[#EFF3F4]"
      } w-full py-2 px-4 rounded-full ${
        isFocused ? "border border-primary" : "border border-[#EFF3F4]"
      }`}
    >
      <div className="flex items-center space-x-4">
        <RiSearchLine
          className={`w-4 h-4 ${isFocused ? "text-primary" : "text-gray-500"}`}
        />
        <input
          type="text"
          placeholder="Search"
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          className="bg-transparent outline-none placeholder-gray-500"
        />
      </div>
    </div>
  );
}
