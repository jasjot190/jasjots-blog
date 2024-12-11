"use client";
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useUserAuth } from "@/_utils/auth-context";

const Lessons = () => {
  const { user } = useUserAuth();
  const router = useRouter();

  const searchParams = useSearchParams();
  const [Lessons, setLessons] = useState([{}]);
  let courseId = searchParams.get("courseId");
  const fetchLessons = async (courseId) => {
    let recievedLessons = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/courses/lessons?courseId=${courseId}`
    );
    let res = await recievedLessons.json();
    res.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
    setLessons(res);
  };

  useEffect(() => {
    fetchLessons(courseId);
  }, []);

  useEffect(() => {
    console.log(Lessons);
  }, [Lessons]);

  return user ? (
    <main>
      <Navbar />
      <section className="py-12 h-full ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Lessons</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
            {Lessons.map((Lesson, index) => (
              <Link
                href={`${Lesson.Video}`}
                target="_blank"
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer text-gray-800 hover:bg-gray-400"
              >
                <img
                  src={Lesson.Img}
                  alt={Lesson.Title}
                  className="w-full h-48  rounded-t-lg mb-4"
                />
                <p className="text-gray-600 mt-2">{index + 1}</p>
                <h3 className="text-xl font-semibold">{Lesson.Title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  ) : (
    router.push("/login")
  );
};

export default Lessons;
