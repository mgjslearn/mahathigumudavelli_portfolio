"use client";
// Tooltip component placeholder. Replace with your actual implementation or customize as needed.
import { useState } from 'react';
export default function Tooltip({ children, content }) {
  const [show, setShow] = useState(false);
  return (
    <span className="relative" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      {show && (
        <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-black text-white text-xs rounded z-10 whitespace-nowrap">
          {content}
        </span>
      )}
    </span>
  );
}
