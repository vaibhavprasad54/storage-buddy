import {
  CircleHelp,
  LayoutDashboard,
  Settings,
  Star,
  Users,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const MobileMenu = () => {
  return (
    <div className="menu w-full flex sm:hidden items-center justify-evenly px-7 gap-5 bg-[#191d21] py-[9px] rounded-t-[20px]">
      <Link href="/"> <LayoutDashboard className="text-gray-500 w-[22px] hover:text-gray-200"/> </Link>
      <Link href="/"> <Star className="text-gray-500 w-[22px] hover:text-gray-200"/> </Link>
      <Link href="/"> <Users className="text-gray-500 w-[22px] hover:text-gray-200"/> </Link>
      <Link href="/"> <Settings className="text-gray-500 w-[22px] hover:text-gray-200"/> </Link>
      <Link href="/"> <CircleHelp className="text-gray-500 w-[22px] hover:text-gray-200"/> </Link>
    </div>
  );
};

export default MobileMenu;
