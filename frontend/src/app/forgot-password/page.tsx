"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleForgotPassword = async () => {
    setMessage("");

    const res = await fetch("http://localhost:5000/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-indigo-100 p-6 rounded-2xl shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Quên mật khẩu?</h2>
        <input
          type="email"
          placeholder="Nhập email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-white p-2 mb-4 px-4 py-3 rounded-lg focus:outline-none border-1 focus:ring-2 focus:ring-indigo-700"
        />
        <button
          onClick={handleForgotPassword}
          className="w-full mx-auto bg-gradient-to-r from-blue-950 to-indigo-950 text-white px-14 py-3 rounded-lg hover:bg-indigo-500 transition-transform duration-200 transform hover:scale-105 cursor-pointer"
        >
          Gửi yêu cầu
        </button>
        {message && <p className="mt-4 text-center text-sm">{message}</p>}
      </div>
    </div>
  );
}
