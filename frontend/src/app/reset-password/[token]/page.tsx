"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation"; 

export default function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const { token } = useParams(); 

    const handleResetPassword = async () => {
        setMessage("");

        const res = await fetch(`http://localhost:5000/auth/reset-password`, { 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token, newPassword }), 
        });

        const data = await res.json();
        setMessage(data.message);

        if (res.ok) {
            setTimeout(() => router.push("/login"), 2000);
        }
    };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-indigo-100 p-6 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Đặt lại mật khẩu</h2>
        <input
          type="password"
          placeholder="Mật khẩu mới"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full bg-white p-2 mb-4 px-4 py-3 rounded-lg focus:outline-none border-1 focus:ring-2 focus:ring-indigo-700"
        />
        <button
          onClick={handleResetPassword}
          className="w-full mx-auto bg-gradient-to-r from-blue-950 to-indigo-950 text-white px-14 py-3 rounded-lg hover:bg-indigo-500 transition-transform duration-200 transform hover:scale-105 cursor-pointer"
        >
          Đặt lại mật khẩu
        </button>
        {message && <p className="mt-4 text-center text-sm">{message}</p>}
      </div>
    </div>
  );
}
