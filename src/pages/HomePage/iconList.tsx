import React from "react";
import { HiOutlinePhotograph } from "react-icons/hi";
import { MdOutlineGifBox, MdOutlineLocationOn } from "react-icons/md";
import { BiPoll } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { FiCalendar } from "react-icons/fi";

type Icon = {
  id: number;
  icon: React.ReactNode;
};

const icons: Icon[] = [
  {
    id: 1,
    icon: <HiOutlinePhotograph className="text-xl text-primary" />,
  },
  {
    id: 2,
    icon: <MdOutlineGifBox className="text-xl text-primary" />,
  },
  {
    id: 3,
    icon: <BiPoll className="text-xl text-primary" />,
  },
  {
    id: 4,
    icon: <BsEmojiSmile className="text-lg text-primary" />,
  },
  {
    id: 5,
    icon: <FiCalendar className="text-lg text-primary" />,
  },
  {
    id: 6,
    icon: <MdOutlineLocationOn className="text-xl text-primary" />,
  },
];

export default icons;
