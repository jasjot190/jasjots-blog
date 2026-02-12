"use client";

import { useEffect, useState } from "react";

export default function AdminPanel() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
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
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {loading ? (
          <p className="p-6 text-center">Loading messages...</p>
        ) : messages.length === 0 ? (
          <p className="p-6 text-center">No messages found.</p>
        ) : (
          <table className="min-w-full text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Message</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-4">{msg.Name}</td>
                  <td className="p-4">{msg.Email}</td>
                  <td className="p-4">{msg.Message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
