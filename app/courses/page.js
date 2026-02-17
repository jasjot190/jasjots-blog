"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUserAuth } from "@/_utils/auth-context";

const Courses = () => {
  const { user } = useUserAuth();
  const [courses, setCourses] = useState([]);
  const router = useRouter();

  const fetchCourses = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/courses`,
      );
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  // Redirect if not logged in
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  // Fetch courses only if logged in
  useEffect(() => {
    if (!user) return;
    fetchCourses();
  }, [user]);

  if (!user) return null;

  return (
    <main>
      <Navbar />
      <section className="py-12 min-h-screen">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Courses</h2>

          {courses.length === 0 ? (
            <p className="text-center text-gray-500">No courses available.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {courses.map((course) => (
                <Link
                  href={{
                    pathname: "/courses/lessons",
                    query: { courseId: course.id },
                  }}
                  key={course.id}
                  className="bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-gray-800 hover:bg-gray-200"
                >
                  <img
                    src={course.Img}
                    alt={course.Title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold">{course.Title}</h3>
                  <p className="text-gray-600 mt-2">{course.Instructor}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Courses;
