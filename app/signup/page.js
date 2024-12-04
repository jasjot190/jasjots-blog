"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import ReCAPTCHA from "react-google-recaptcha";
import { useUserAuth } from "@/_utils/auth-context";

// Security key = "6LdH9Y4qAAAAAOpXfGoDDacZfV7x8ZuXA7D9Kogr"

const Signup = () => {
  const { gitHubSignIn, googleSignIn, emailSignUp } = useUserAuth();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const githubSignUp = async () => await gitHubSignIn();
  const googleSignUp = async () => await googleSignIn();
  const EmailSignUp = async (e) => {
    e.preventDefault();
    await emailSignUp(userName, email, password);
  };

  return (
    <main>
      <Navbar />
      <section className="flex justify-center items-center pt-5 sm:10 lg:pt-20">
        <div className="w-full max-w-sm bg-gray-100 p-8 rounded-xl shadow-2xl">
          <h2 className="text-2xl font-bold text-center mb-6 dark:text-gray-800">
            Sign&#45;up
          </h2>
          <div className="flex flex-col gap-5">
            <Button
              onClick={githubSignUp}
              className="rounded-lg py-5 bg-lime-700 hover:bg-lime-800 dark:text-gray-200"
            >
              <img src="/githubLogo.png" alt="" className="w-6 mx-3" />
              Sign&#45;up with GitHub
            </Button>

            <Button
              onClick={googleSignUp}
              className="rounded-lg py-5 dark:text-gray-200 dark:bg-gray-800"
            >
              {" "}
              <img src="/googlelogo.png" alt="" className="w-6 mx-3" />
              Sign&#45;up with Google
            </Button>
          </div>
          <h2 className="text-gray-400 text-center m-5">&ndash; or &ndash;</h2>
          <form onSubmit={(e) => EmailSignUp(e)}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
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
                className="shadow appearance-none border rounded w-full py-2 px-3 dark:text-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block dark:text-white text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 dark:text-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <ReCAPTCHA
              sitekey="6LdH9Y4qAAAAACE9Wm20NV1hgoWZA79vwc4qKun5"
              onChange={onChange}
            />

            <div className="flex">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 dark:text-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto mt-5"
              >
                Create an account
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Signup;
