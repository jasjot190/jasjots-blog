import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import { useUserAuth } from "@/_utils/auth-context";

const Courses = () => {
  const [courses, setCourses] = useState([{}]);
  const { user } = useUserAuth();
  const fetchCourses = async () => {
    let recievedCourses = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/courses`
    );
    let res = await recievedCourses.json();
    setCourses([res[0], res[1], res[2]]);
  };
  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <section className="py-7 px-5  text-center container">
      <h2 className="text-4xl font-medium">Recommended Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="flex flex-wrap gap-10 justify-center mt-8 text-start"
          >
            <div className="sm:max-w-[20rem] bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
              <div className="relative" style={{ height: "200px" }}>
                <img
                  alt={course.Title}
                  loading="lazy"
                  width="288"
                  height="288"
                  decoding="async"
                  data-img="1"
                  className="rounded-t-lg object-cover w-full h-full"
                  style={{ color: "transparent" }}
                  src={course.Img}
                />
              </div>
              <div className="p-5 flex flex-col justify-between h-64">
                <h5 className="text-xl font-bold tracking-tight text-gray-900">
                  {course.category}
                </h5>
                <h3 className="text-sm mb-3 font-medium text-gray-500">
                  {course.Instructor}
                </h3>
                <p className="font-semibold text-gray-700 ">{course.Title}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-cyan-950">$0</span>
                  <Link
                    className="flex items-center gap-2 px-3 py-2 text-sm bg-cyan-950 hover:bg-[#102229] scale-90 hover:scale-100 rounded-md text-white outline-none focus:ring-2 transform active:scale-90 transition-transform"
                    href={
                      user
                        ? {
                            pathname: "/courses/lessons",
                            query: { courseId: course.id },
                          }
                        : "/login"
                    }
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
          </div>
          // <Link
          //   href={{
          //     pathname: "/courses/lessons",
          //     query: { courseId: course.id },
          //   }}
          //   key={index}
          //   className="bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-gray-800 hover:bg-gray-400 cursor-pointer"
          // >
          //   <img
          //     src={course.Img}
          //     alt={course.Title}
          //     className="w-full h-48  rounded-t-lg mb-4"
          //   />
          //   <h3 className="text-xl font-semibold">{course.Title}</h3>
          //   <p className="text-gray-600 mt-2">{course.Instructor}</p>
          // </Link>
        ))}
      </div>
      <Link
        className="px-4 py-2 sm:px-6 rounded-md bg-theme-primary false font-medium text-gray-800 dark:text-gray-200 transition group mt-10 flex w-fit items-center gap-2 mx-auto"
        href={user ? "/courses" : "/login"}
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
      </Link>
    </section>
  );
};

export default Courses;

{
  /* <div className="flex flex-wrap gap-10 justify-center mt-8 text-start">
        <div className="sm:max-w-[20rem] bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
          <div className="relative" style={{ height: "200px" }}>
            <img
              alt="some alt"
              loading="lazy"
              width="288"
              height="288"
              decoding="async"
              data-img="1"
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
              Discover the secrets of successful entrepreneurship and learn how
              to turn your ideas into a thriving b...
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-cyan-950">$0</span>
              <Link
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
              </Link>
            </div>
          </div>
        </div>
      </div> */
}
