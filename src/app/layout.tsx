import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, auth } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Storage Buddy",
  description: "All in one file storage web app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { userId } = await auth();
  const isAuth = !!userId;

  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
      {isAuth && (
        <Navbar />
      )}
        {children}
        <Toaster />
      </body>
    </html>
    </ClerkProvider>
  );
}
