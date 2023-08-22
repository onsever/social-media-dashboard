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
}

const navLinks: NavLink[] = [
  {
    title: "Home",
    icon: <RiHome7Fill className="w-7 h-7" />,
    active: true,
  },
  {
    title: "Explore",
    icon: <RiSearchLine className="w-6 h-6" />,
    active: false,
  },
  {
    title: "Notifications",
    icon: <GrNotification className="w-6 h-6" />,
    active: false,
  },
  {
    title: "Messages",
    icon: <AiOutlineMail className="w-6 h-6" />,
    active: false,
  },
  {
    title: "Lists",
    icon: <RiFileList2Line className="w-6 h-6" />,
    active: false,
  },
  {
    title: "Bookmarks",
    icon: <FaRegBookmark className="w-6 h-6" />,
    active: false,
  },
  {
    title: "Communities",
    icon: <FiUsers className="w-6 h-6" />,
    active: false,
  },
  {
    title: "Verified",
    icon: <MdOutlineVerified className="w-6 h-6" />,
    active: false,
  },
  {
    title: "Profile",
    icon: <FaRegUser className="w-6 h-6" />,
    active: false,
  },
  {
    title: "More",
    icon: <CgMoreO className="w-6 h-6" />,
    active: false,
  },
];

export default navLinks;
