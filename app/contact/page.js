"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Contact = () => {
  const [verify, setVerify] = useState(false);
  const router = useRouter();

  function onChange(value) {
    if (value) {
      setVerify(true);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (verify) {
      router.push("/");
    }
  };
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="min-h-full justify-center items-center flex flex-1">
        <div className="container bg-gray-100  p-10 md:p-20 flex flex-col md:flex-row  dark:text-gray-800 gap-20 min-h-full rounded-lg shadow-lg items-center flex-1">
          <div className="flex flex-1 gap-14 flex-col items-center justify-center md:pb-48">
            <div className="flex flex-col justify-center">
              <h2 className="font-semibold text-5xl my-5 mx-auto">
                Your Next Step Starts Here
              </h2>
              <p className="text-xl mx-auto">
                I&#39;m just a message away—drop me a line, and I&#39;ll be in
                touch!
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-2xl my-3">Find Me Online</h2>
              <div className="flex gap-4 justify-center">
                <Link target="_blank" href={"https://github.com/jasjot190/"}>
                  <img className="w-8" src="/githubLogo.svg" alt="" />
                </Link>
                <Link
                  target="_blank"
                  href={
                    "https://www.threads.net/@jasjot190?igshid=NTc4MTIwNjQ2YQ=="
                  }
                >
                  <img className="w-8" src="/twitterLogo.png" alt="" />
                </Link>
                <Link
                  target="_blank"
                  href={
                    "https://www.linkedin.com/in/jasjot-singh-998737246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  }
                >
                  <img className="w-8" src="/linkdinLogo.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
          <form onSubmit={(e) => handleSubmit(e)} className="flex-1">
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
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                className="shadow appearance-none border rounded w-full py-2 px-3 dark:text-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your message"
                rows="5"
              ></textarea>
            </div>
            <ReCAPTCHA
              sitekey="6LdH9Y4qAAAAACE9Wm20NV1hgoWZA79vwc4qKun5"
              onChange={onChange}
            />
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white dark:text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-5"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
