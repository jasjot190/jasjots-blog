"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import { useUserAuth } from "@/_utils/auth-context";

const Testimonials = () => {
  const { user } = useUserAuth();

  const [fetchedTestimonials, setFetchedTestimonials] = useState([{}]);
  const fetchTestimonials = async () => {
    let recievedCourses = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/testimonials`
    );
    let res = await recievedCourses.json();
    setFetchedTestimonials([res[0], res[1], res[2]]);
  };
  useEffect(() => {
    fetchTestimonials();
  }, []);
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fetchedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition-transform duration-300 "
            >
              <img
                src="/userLogo.png"
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 text-gray-600 border-1 shadow-lg"
              />
              <h3 className="text-xl font-semibold text-center text-gray-600">
                {testimonial.name}
              </h3>
              <p className="text-gray-600 text-center mt-2">
                {testimonial.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Link
        className="flex text-center w-[5.5rem] px-3 py-2 text-sm hover:bg-[#102229] dark:text-white hover:text-white scale-90 hover:scale-100 rounded-md text-cyan-950 transition-transform mx-auto my-6"
        href={user ? "/addtestimonial" : "/login"}
      >
        Add Yours
      </Link>
    </section>
  );
};

export default Testimonials;
