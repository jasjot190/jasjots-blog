"use client";
import Navbar from "@/components/Navbar";
import Courses from "@/components/Courses";
import Testimonials from "@/components/Testimonials";
import { useRouter } from "next/navigation";
import React from "react";

const HomePage = () => {
  const router = useRouter();

  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
          <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
            <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
              Welcome to
              <br className="hidden lg:block" />{" "}
              <span className="font-semibold">Jasjot&apos;s Blog</span>
            </h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Confused on which course to take? I have got you covered. Browse
              courses and find out the best course for you. Its free! Code With
              Harry is my attempt to teach basics and those coding techniques to
              people in short time which took me ages to learn.
            </p>
            <div className="flex justify-center lg:justify-start mt-6">
              <button
                onClick={() => router.push("/courses")}
                className="px-3 py-2 lg:px-4 lg:py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:text-white hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-600 dark:hover:bg-gray-300"
              >
                Free Courses
              </button>
              <button className="px-3 py-2 mx-4 lg:px-4 lg:py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400">
                Explore Blog
              </button>
            </div>
            <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20"></div>
          </div>
          <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
            <img
              src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
              alt="tailwind css components"
              className="w-full h-full max-w-md mx-auto"
            />
          </div>
        </section>
        <Courses />
        <Testimonials />
      </main>
    </div>
  );
};

export default HomePage;
