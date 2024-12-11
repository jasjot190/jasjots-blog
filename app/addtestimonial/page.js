"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/navigation";

const Contact = () => {
  const [userName, setUserName] = useState("");
  const [Feedback, setFeedback] = useState("");
  const router = useRouter();

  const addTestimonial = async () => {
    await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/addTestimonial?userName=${userName}&description=${Feedback}`,
      {
        method: "POST",
        body: JSON.stringify({
          name: "John Doe",
          age: 30,
          location: "San Francisco",
          isAdmin: true,
        }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }
    );
  };
  function handleSubmit(e) {
    e.preventDefault();
    addTestimonial();
    router.push("/login");
  }
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="min-h-full justify-center items-center flex flex-1">
        <div className="w-auto container bg-gray-100 p-10 md:p-10 flex flex-col dark:text-gray-800 gap-7 min-h-full rounded-lg shadow-lg items-center">
          <h1 className="font-extrabold text-3xl">Feedback</h1>
          <form onSubmit={(e) => handleSubmit(e)} className="w-96">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 dark:text-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your name"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Feedback
              </label>
              <textarea
                id="message"
                className="shadow appearance-none border rounded w-full py-2 px-3 dark:text-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your feedback"
                rows="5"
                onChange={(e) => setFeedback(e.target.value)}
              ></textarea>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white dark:text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-5"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
