// components/Notification.js

import { useState } from 'react';

export default function Notification({ type, message }) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      className={`${
        type === 'success' ? 'bg-green-500' : 'bg-red-700'
      } py-3 px-5 rounded-md text-white text-center font-semibold fixed top-30 right-10 flex gap-4 z-50`}
    >
      <p>{message}</p>
      <span
        className="cursor-pointer font-bold"
        onClick={() => setIsVisible(false)}
      >
          <img
          src="/delete.png" 
          alt="Close"
          className="w-5 h-5" 
        />
      </span>
    </div>
  );
}