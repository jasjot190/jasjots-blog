"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { useUserAuth } from "@/_utils/auth-context";
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";

export default function AdminPanel() {
  const [messages, setMessages] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminChecked, setAdminChecked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showResponse, setShowResponse] = useState(false);
  const [selectedMessage, setselectedMessage] = useState("");

  const { user } = useUserAuth();
  const router = useRouter();

  const checkAdmin = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/isAdmin?userId=${user.email}`,
      );
      const data = await response.json();

      setIsAdmin(data);
      setAdminChecked(true);
    } catch (error) {
      console.error("Error checking admin status:", error);
      setAdminChecked(true);
    }
  };

  const fetchMessages = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/messages`,
      );

      const data = await res.json();
      setMessages(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoading(false);
    }
  };

  // Step 1: Redirect if not logged in
  useEffect(() => {
    if (!user) {
      router.push("/login");
      return;
    }

    checkAdmin();
  }, [user, router]);

  // Step 2: After admin check
  useEffect(() => {
    if (!adminChecked) return;

    if (!isAdmin) {
      router.push("/");
      return;
    }

    fetchMessages();
  }, [adminChecked, isAdmin, router]);

  // Prevent render until admin check complete
  if (!adminChecked) {
    return (
      <div className="p-6 text-center text-gray-500">
        Checking permissions...
      </div>
    );
  }

  return (
    <div>
      {showResponse ? (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 shadow-md rounded-lg p-10 md:p-20 relative">
            <button
              className="absolute top-4 right-4 text-xl hover:text-gray-900 dark:hover:text-gray-500"
              onClick={() => {
                if (showResponse != false) setShowResponse(false);
                setselectedMessage("");
              }}
            >
              x
            </button>
            {selectedMessage.Response === "No response yet." ? (
              <div>
                <textarea
                  name="response"
                  id=""
                  placeholder={selectedMessage.Response}
                  className="h-full w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                ></textarea>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                  Send
                </Button>
              </div>
            ) : (
              <div>
                <p>{selectedMessage.Response}</p>
              </div>
            )}
          </div>
        </div>
      ) : null}
      <Navbar />

      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          Admin Panel
        </h1>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md rounded-lg overflow-hidden">
          {loading ? (
            <p className="p-6 text-center text-gray-500 dark:text-gray-300">
              Loading messages...
            </p>
          ) : messages.length === 0 ? (
            <p className="p-6 text-center text-gray-500 dark:text-gray-300">
              No messages found.
            </p>
          ) : (
            <table className="min-w-full text-left bg-gray-100 dark:bg-gray-800">
              <thead className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                <tr>
                  <th className="p-4 font-semibold">Name</th>
                  <th className="p-4 font-semibold">Email</th>
                  <th className="p-4 font-semibold">Message</th>
                  <th className="p-4 font-semibold">Responded</th>
                  <th className="p-4 font-semibold">Response</th>
                </tr>
              </thead>

              <tbody>
                {messages.map((msg, index) => (
                  <tr
                    key={index}
                    className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                  >
                    <td className="p-4 text-gray-800 dark:text-gray-200">
                      {msg.Name}
                    </td>
                    <td className="p-4 text-gray-800 dark:text-gray-200">
                      {msg.Email}
                    </td>
                    <td className="p-4 text-gray-800 dark:text-gray-200">
                      {msg.Message}
                    </td>
                    <td className="p-4 text-gray-800 dark:text-gray-200 text-center">
                      {msg.Responded ? (
                        <span className="text-green-600 dark:text-green-400 font-semibold">
                          Yes
                        </span>
                      ) : (
                        <span className="text-red-600 dark:text-red-400 font-semibold">
                          No
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-gray-800 dark:text-gray-200">
                      <Button
                        variant="outline"
                        onClick={() => {
                          setselectedMessage(msg);
                          if (!msg.Response) {
                            setselectedMessage({
                              ...msg,
                              Response: "No response yet.",
                            });
                          }
                          setShowResponse(true);
                        }}
                      >
                        View Response
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
}
