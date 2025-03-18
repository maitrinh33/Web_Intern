"use client";
import { useState, useContext } from "react"; // ✅ Import useContext
import { useRouter } from "next/navigation";
import Notification from "@/components/Notification";
import AIImageSection from "@/components/AIImageSection";
import { AuthContext } from "../context/AuthContext";
export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = useContext(AuthContext);

  if (!auth) return null;  // Safety check

  const handleLogin = async () => {
    setError("");
    setSuccess("");
    setLoading(true);
  
    try {
      const res = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, rememberMe }),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        setSuccess("Đăng nhập thành công!");
        localStorage.setItem("token", data.token);
        auth.login(email);  // ✅ Update context state
  
        setTimeout(() => router.push("/"), 2000);
      } else {
        setError(data.message || "Đăng nhập thất bại!");
      }
    } catch (err) {
      setError("Lỗi máy chủ! Hãy thử lại sau.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="flex flex-col md:flex-row items-center justify-center lg:my-24">
      <div className="flex flex-col md:flex-row w-full max-w-10/12 rounded-lg overflow-hidden">
        {/* Left - Login Form */}
        <div className="w-full sm:w-full md:w-1/2 mr-20 flex flex-col justify-center">
          <div className="relative text-center mt-4">
            <h2 className="text-4xl md:text-5xl font-bold text-black relative z-10">
              Hello!
            </h2>
            <div className="w-40 md:w-60 h-6 md:h-8 bg-indigo-200 rounded absolute left-1/2 transform -translate-x-1/2 top-8"></div>
          </div>

          {/* Inputs */}
          <div className="mt-18 flex flex-col items-center">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full md:w-12/12 mb-4 px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-indigo-700"
              required
            />

            {/* Password Input */}
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full md:w-12/12 mt-4 px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-700"
              required
            />

            {/* Remember Me Checkbox */}
            <div className="flex items-center justify-between w-full sm:w-full mt-4 text-sm">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="w-5 h-5 mr-2 accent-indigo-700 rounded-3xl"
                />
                <span className="text-gray-800">Remember Me</span>
              </label>
              <a href="/forgot-password" className="text-gray-600 text-xs underline">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              onClick={handleLogin}
              className={`px-14 py-3 mx-auto mt-6 bg-gradient-to-r from-blue-950 to-indigo-950 text-white rounded-full transition duration-300 cursor-pointer ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-500"
              }`}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log in"}
            </button>
          </div>

          {/* Notification Messages */}
          {error && <Notification type="error" message={error} />}
          {success && <Notification type="success" message={success} />}
        </div>

        {/* Right - AI Image & Info */}
        <div className="relative justify-self-end w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] hidden md:block">
          <AIImageSection />
        </div>
      </div>
    </div>
  );
}
