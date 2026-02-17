"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { useUserAuth } from "@/_utils/auth-context";
import { useRouter } from "next/navigation";

export default function AdminPanel() {
  const [messages, setMessages] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminChecked, setAdminChecked] = useState(false);
  const [loading, setLoading] = useState(true);

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
