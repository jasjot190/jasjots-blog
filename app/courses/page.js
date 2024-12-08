"use client";
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import Link from "next/link";

// const courses = [
//   {
//     title: "Course 1",
//     description: "This is a brief description of Course 1.",
//     image: "path/to/course1.jpg",
//   },
//   {
//     title: "Course 2",
//     description: "This is a brief description of Course 2.",
//     image: "path/to/course2.jpg",
//   },
//   {
//     title: "Course 3",
//     description: "This is a brief description of Course 3.",
//     image: "path/to/course3.jpg",
//   },
//   {
//     title: "Course 1",
//     description: "This is a brief description of Course 1.",
//     image: "path/to/course1.jpg",
//   },
//   {
//     title: "Course 1",
//     description: "This is a brief description of Course 1.",
//     image: "path/to/course1.jpg",
//   },
//   {
//     title: "Course 1",
//     description: "This is a brief description of Course 1.",
//     image: "path/to/course1.jpg",
//   },
//   {
//     title: "Course 1",
//     description: "This is a brief description of Course 1.",
//     image: "path/to/course1.jpg",
//   },
// ];

const Courses = () => {
  const [courses, setCourses] = useState([{}]);
  const fetchCourses = async () => {
    let recievedCourses = await fetch("http://localhost:5500/courses");
    let res = await recievedCourses.json();
    setCourses(res);
  };
  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <main>
      <Navbar />
      <section className="py-12 h-svh">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <Link
                href={{
                  pathname: "./lessons",
                  query: { courseId: course.id },
                }}
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-gray-800 hover:bg-gray-400 cursor-pointer"
              >
                <img
                  src={course.Img}
                  alt={course.Title}
                  className="w-full h-48  rounded-t-lg mb-4"
                />
                <h3 className="text-xl font-semibold">{course.Title}</h3>
                <p className="text-gray-600 mt-2">{course.Instructor}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Courses;
