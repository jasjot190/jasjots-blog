"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

export default function AdminPanel() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();

    const interval = setInterval(() => {
      fetchMessages();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const fetchMessages = async () => {
    try {
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

  return (
    <div>
      <Navbar />

      <main className="container mx-auto p-4">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          Admin Panel
        </h1>

        {/* Card */}
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
            <table className="min-w-full text-left bg-gray-100 dark:text-gray-800">
              {/* Table Header */}
              <thead className="bg-gray-00  text-gray-800">
                <tr>
                  <th className="p-4 font-semibold">Name</th>
                  <th className="p-4 font-semibold">Email</th>
                  <th className="p-4 font-semibold">Message</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {messages.map((msg, index) => (
                  <tr
                    key={index}
                    className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                  >
                    <td className="p-4 text-gray-800">{msg.Name}</td>

                    <td className="p-4 text-gray-800 ">{msg.Email}</td>

                    <td className="p-4 text-gray-800 ">{msg.Message}</td>
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
