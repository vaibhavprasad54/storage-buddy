import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs";
import { LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth();
  const isAuth = !!userId;

  return (
    <div className="main h-[90vh] w-screen flex flex-col items-center">
      <div className="py-2 px-7 text-center flex flex-col items-center justify-center h-[90%]">
        <div>
          <h2 className="text-4xl md:text-8xl md:h-[6.5rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#277dff] to-blue-200">
            Storage Buddy
          </h2>
        </div>
        <p className="text-sm sm:text-lg mt-2 max-w-xl text-gray-400">
          Best cloud sorage service platform for all your files in one place,
          making it the go-to choice for modern data storage needs.
        </p>

        {!isAuth ? (
          <Link href="/sign-in">
            <Button className="text-xl bg-[#277dff] hover:bg-[#2775e9] mt-4 px-6 py-1">
              Log in
            </Button>
          </Link>
        ) : (
          <Link href="/dashboard">
            <Button className="text-lg sm:text-xl bg-[#277dff] hover:bg-[#2775e9] mt-4 px-6 py-1">
              Go to Dashboard
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
