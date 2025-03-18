"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async () => {
    setMessage("");
    setLoading(true);

    const res = await fetch("http://localhost:5000/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    setMessage(data.message);
    setLoading(false);
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
          className={`w-full mx-auto bg-gradient-to-r from-blue-950 to-indigo-950 text-white px-14 py-3 rounded-lg transition-transform duration-200 transform hover:scale-105 cursor-pointer ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-500'}`}
          disabled={loading}
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 mx-auto text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              ></path>
            </svg>
          ) : (
            "Gửi yêu cầu"
          )}
        </button>
        {message && <p className="mt-4 text-center text-sm">{message}</p>}
      </div>
    </div>
  );
}