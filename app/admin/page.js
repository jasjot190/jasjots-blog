"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { useUserAuth } from "@/_utils/auth-context";
import { useRouter } from "next/navigation";

export default function AdminPanel() {
  const [messages, setMessages] = useState([]);
  const { user } = useUserAuth(); // ← important
  const router = useRouter();

  const fetchMessages = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/messages`,
      );
      const data = await res.json();
      setMessages(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);
  useEffect(() => {
    if (!user) return;
    fetchMessages();
  }, [user]);

  // If no user, prevent rendering
  if (!user) return null;

  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

        <div className="bg-white border shadow-md rounded-lg overflow-hidden">
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
                <tr key={index} className="border-t">
                  <td className="p-4">{msg.Name}</td>
                  <td className="p-4">{msg.Email}</td>
                  <td className="p-4">{msg.Message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
