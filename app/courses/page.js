import Navbar from "@/components/Navbar";
import React from "react";

const courses = [
  {
    title: "Course 1",
    description: "This is a brief description of Course 1.",
    image: "path/to/course1.jpg",
  },
  {
    title: "Course 2",
    description: "This is a brief description of Course 2.",
    image: "path/to/course2.jpg",
  },
  {
    title: "Course 3",
    description: "This is a brief description of Course 3.",
    image: "path/to/course3.jpg",
  },
  {
    title: "Course 1",
    description: "This is a brief description of Course 1.",
    image: "path/to/course1.jpg",
  },
  {
    title: "Course 1",
    description: "This is a brief description of Course 1.",
    image: "path/to/course1.jpg",
  },
  {
    title: "Course 1",
    description: "This is a brief description of Course 1.",
    image: "path/to/course1.jpg",
  },
  {
    title: "Course 1",
    description: "This is a brief description of Course 1.",
    image: "path/to/course1.jpg",
  },
];

const Courses = () => {
  return (
    <main>
      <Navbar />
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-xl font-semibold">{course.title}</h3>
                <p className="text-gray-600 mt-2">{course.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Courses;
