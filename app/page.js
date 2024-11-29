import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Testimonials from "@/components/Testimonials";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
          <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
            <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
              Welcome to
              <br className="hidden lg:block" />{" "}
              <span className="font-semibold">Jasjot's Blog</span>
            </h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Confused on which course to take? I have got you covered. Browse
              courses and find out the best course for you. Its free! Code With
              Harry is my attempt to teach basics and those coding techniques to
              people in short time which took me ages to learn.
            </p>
            <div class="flex justify-center lg:justify-start mt-6">
              <button class="px-3 py-2 lg:px-4 lg:py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:text-white hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-600 dark:hover:bg-gray-300">
                Free Courses
              </button>
              <button class="px-3 py-2 mx-4 lg:px-4 lg:py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400">
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
        <section className="py-7 text-center container">
          <h2 className="text-4xl font-medium">Recommended Courses</h2>

          <div className="flex flex-wrap gap-10 justify-center mt-8 text-start">
            <div className="sm:max-w-[20rem] bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
              <div className="relative" style={{ height: "200px" }}>
                <img
                  alt="some alt"
                  loading="lazy"
                  width="288"
                  height="288"
                  decoding="async"
                  data-nimg="1"
                  className="rounded-t-lg object-cover w-full h-full"
                  style={{ color: "transparent" }}
                  src="https://bsf-systems-bucket.s3.us-east-2.amazonaws.com/57ab2250db2cc63"
                />
              </div>
              <div className="p-5 flex flex-col justify-between h-64">
                <h5 className="text-xl font-bold tracking-tight text-gray-900">
                  Basic
                </h5>
                <h3 className="text-sm mb-3 font-medium text-gray-500">
                  Cyber Security
                </h3>
                <ul className="text-sm mb-3 font-medium text-gray-500">
                  <li>10GB Storage</li>
                  <li>Basic Support</li>
                  <li>Single User</li>
                  <li>community Access</li>
                  <li>Weekly Updates</li>
                </ul>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-cyan-950">$0</span>
                  <Link
                    className="flex items-center gap-2 px-3 py-2 text-sm bg-cyan-950 hover:bg-[#102229] scale-90 hover:scale-100 rounded-md text-white outline-none focus:ring-2 transform active:scale-90 transition-transform"
                    href={""}
                  >
                    Explore
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="sm:max-w-[20rem] bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
              <div className="relative" style={{ height: "200px" }}>
                <img
                  alt="some alt"
                  loading="lazy"
                  width="288"
                  height="288"
                  decoding="async"
                  data-nimg="1"
                  className="rounded-t-lg object-cover w-full h-full"
                  style={{ color: "transparent" }}
                  src="https://bsf-systems-bucket.s3.us-east-2.amazonaws.com/d8db502ca677e8c"
                />
              </div>
              <div className="p-5 flex flex-col justify-between h-64">
                <h5 className="text-xl font-bold tracking-tight text-gray-900">
                  Standard
                </h5>
                <h3 className="text-sm mb-3 font-medium text-gray-500">
                  Project Management
                </h3>
                <p className="font-normal text-gray-700">
                  Learn the essential skills and techniques required to
                  successfully plan, execute, and manage projects ...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-cyan-950">$0</span>
                  <a
                    className="flex items-center gap-2 px-3 py-2 text-sm bg-cyan-950 hover:bg-[#102229] scale-90 hover:scale-100 rounded-md text-white outline-none focus:ring-2 transform active:scale-90 transition-transform"
                    href="/courses/65a310e0080bd502e2af4779"
                  >
                    Explore
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="sm:max-w-[20rem] bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
              <div className="relative" style={{ height: "200px" }}>
                <img
                  alt="some alt"
                  loading="lazy"
                  width="288"
                  height="288"
                  decoding="async"
                  data-nimg="1"
                  className="rounded-t-lg object-cover w-full h-full"
                  style={{ color: "transparent" }}
                  src="https://bsf-systems-bucket.s3.us-east-2.amazonaws.com/6dc853fc5c65846"
                />
              </div>
              <div className="p-5 flex flex-col justify-between h-64">
                <h5 className="text-xl font-bold tracking-tight text-gray-900">
                  Professional
                </h5>
                <h3 className="text-sm mb-3 font-medium text-gray-500">
                  Entrepreneurship
                </h3>
                <p className="font-normal text-gray-700">
                  Discover the secrets of successful entrepreneurship and learn
                  how to turn your ideas into a thriving b...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-cyan-950">$0</span>
                  <a
                    className="flex items-center gap-2 px-3 py-2 text-sm bg-cyan-950 hover:bg-[#102229] scale-90 hover:scale-100 rounded-md text-white outline-none focus:ring-2 transform active:scale-90 transition-transform"
                    href="/courses/65a30fce080bd502e2af4768"
                  >
                    Explore
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a
            className="px-4 py-2 sm:px-6 rounded-md bg-theme-primary false text-white transition inline-block group mt-10 flex w-fit items-center gap-2 mx-auto"
            href="/courses"
          >
            Browse more courses
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="w-0 -translate-x-4 group-hover:w-6 group-hover:translate-x-0 group-focus:w-6 group-focus:translate-x-0 transition-all"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              ></path>
            </svg>
          </a>
        </section>
        <Testimonials />
      </main>
    </div>
  );
};

export default HomePage;
