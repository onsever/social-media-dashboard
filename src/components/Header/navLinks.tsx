import React from "react";
import { RiHome7Fill, RiSearchLine, RiUserLine } from "react-icons/ri";
import { GrNotification } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";

interface NavLink {
  title: string;
  icon: React.ReactNode;
  active: boolean;
}

const navLinks: NavLink[] = [
  {
    title: "Home",
    icon: <RiHome7Fill className="w-8 h-8" />,
    active: true,
  },
  {
    title: "Explore",
    icon: <RiSearchLine className="w-7 h-7" />,
    active: false,
  },
  {
    title: "Notifications",
    icon: <GrNotification className="w-7 h-7" />,
    active: false,
  },
  {
    title: "Messages",
    icon: <AiOutlineMail className="w-7 h-7" />,
    active: false,
  },
  {
    title: "Profile",
    icon: <RiUserLine className="w-7 h-7" />,
    active: false,
  },
];

export default navLinks;
