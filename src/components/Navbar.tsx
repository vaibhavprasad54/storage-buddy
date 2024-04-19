import Image from "next/image"
import logo from "../../public/logo_new.png"
import { UserButton } from "@clerk/nextjs"
import Link from "next/link"

const Navbar = () => {
    return (
        <div className="w-full z-50 border-b border-[#252525] sticky top-0 bg-[#0f1013] flex items-center justify-between px-7 sm:px-7 py-4">
          <div className="logo cursor-pointer">
            <Link href="/" className="flex items-center justify-center gap-4 font-bold text-[22px] text-gray-100">
              <h1 className="hidden md:flex">Storage Buddy</h1>
              <Image src={logo} width={50} height={50} alt="logo-img" />
            </Link>
          </div>
          <div className="user">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
    )
}

export default Navbar