"use client";
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const testimonials = [
  {
    name: "John Doe",
    feedback: "This product is amazing! It has changed my life for the better.",
    image: "path/to/image1.jpg",
  },
  {
    name: "Jane Smith",
    feedback: "Excellent service and fantastic results!",
    image: "path/to/image2.jpg",
  },
  {
    name: "Jane Smith",
    feedback: "Excellent service and fantastic results!",
    image: "path/to/image2.jpg",
  },
];

const Testimonials = () => {
  const [fetchedTestimonials, setFetchedTestimonials] = useState([{}]);
  const fetchTestimonials = async () => {
    let recievedCourses = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/testimonials`
    );
    let res = await recievedCourses.json();
    setFetchedTestimonials(res);
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
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 text-gray-600"
              />
              <h3 className="text-xl font-semibold text-center text-gray-600">
                {testimonial.name}
              </h3>
              <p className="text-gray-600 text-center mt-2">
                {testimonial.feedback}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
