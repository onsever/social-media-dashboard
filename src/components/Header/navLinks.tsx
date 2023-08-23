import React from "react";
import { RiHome7Fill, RiSearchLine, RiFileList2Line } from "react-icons/ri";
import { GrNotification } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { FaRegUser, FaRegBookmark } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { CgMoreO } from "react-icons/cg";
import { MdOutlineVerified } from "react-icons/md";

interface NavLink {
  title: string;
  icon: React.ReactNode;
  active: boolean;
  path: string;
}

const navLinks: NavLink[] = [
  {
    title: "Home",
    icon: <RiHome7Fill className="w-7 h-7" />,
    active: true,
    path: "/home",
  },
  {
    title: "Explore",
    icon: <RiSearchLine className="w-6 h-6" />,
    active: false,
    path: "/explore",
  },
  {
    title: "Notifications",
    icon: <GrNotification className="w-6 h-6" />,
    active: false,
    path: "/notifications",
  },
  {
    title: "Messages",
    icon: <AiOutlineMail className="w-6 h-6" />,
    active: false,
    path: "/messages",
  },
  {
    title: "Lists",
    icon: <RiFileList2Line className="w-6 h-6" />,
    active: false,
    path: "/lists",
  },
  {
    title: "Bookmarks",
    icon: <FaRegBookmark className="w-6 h-6" />,
    active: false,
    path: "/bookmarks",
  },
  {
    title: "Communities",
    icon: <FiUsers className="w-6 h-6" />,
    active: false,
    path: "/communities",
  },
  {
    title: "Verified",
    icon: <MdOutlineVerified className="w-6 h-6" />,
    active: false,
    path: "/verified",
  },
  {
    title: "Profile",
    icon: <FaRegUser className="w-6 h-6" />,
    active: false,
    path: "/profile",
  },
  {
    title: "More",
    icon: <CgMoreO className="w-6 h-6" />,
    active: false,
    path: "/more",
  },
];

export default navLinks;
