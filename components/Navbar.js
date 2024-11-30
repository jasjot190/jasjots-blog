"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HamIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./theme-btn";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="bg-background/50 sticky top-0 border-b backdrop-blur- p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/">JasjotBlog</Link>
        </div>
        <div className="hidden md:flex space-x-4 pl-28">
          <Link
            href="/"
            className="hover:scale-105 hover:font-semibold transition-transform duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:scale-105 hover:font-semibold transition-transform duration-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:scale-105 hover:font-semibold transition-transform duration-300"
          >
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <HamIcon />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>JasjotBlog</SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-5 my- 2">
                    <Link
                      href="/"
                      className="hover:scale-105 hover:font-semibold transition-transform duration-300"
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      className="hover:scale-105 hover:font-semibold transition-transform duration-300"
                    >
                      About
                    </Link>
                    <Link
                      href="/contact"
                      className="hover:scale-105 hover:font-semibold transition-transform duration-300"
                    >
                      Contact
                    </Link>
                  </div>
                  <div className="space-x-4 my-6">
                    <Button variant="outline" className="">
                      SignUp
                    </Button>
                    <Button variant="outline">LogIn</Button>
                  </div>
                  <ModeToggle />
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden md:flex space-x-4">
          <Button
            className="text-xs"
            variant="outline"
            onClick={() => router.push("/signup")}
          >
            SignUp
          </Button>
          <Button variant="outline" onClick={() => router.push("/login")}>
            LogIn
          </Button>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
