"use client";

import { useState } from "react";

const ConnectButtons = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("naimur.rezaa@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="animate-fadeInUp z-100 mt-4 flex flex-col items-center justify-center gap-6 md:mt-8 md:flex-row md:gap-10">
      <div className="group relative inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-white/10 bg-white/10 py-[3px] pl-2 pr-[3px] text-base font-medium opacity-85 backdrop-blur-xs transition-all hover:bg-transparent md:py-1 md:pl-3 md:pr-1">
        <span className="z-10 px-3 text-white transition-colors duration-300 group-hover:text-black">
          Let&apos;s Connect
        </span>
        <span className="absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"></span>
        <span className="z-10 flex items-center justify-center overflow-hidden rounded-full bg-white p-2 transition-colors duration-300 group-hover:bg-transparent md:p-2.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right text-black transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-0"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right absolute -translate-x-5 text-black opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </span>
      </div>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 py-3 text-base font-light text-white/75 outline-hidden transition-all duration-300 cursor-pointer hover:text-white/90"
      >
        {copied ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-check"
            >
              <path d="M20 6 9 17l-5-5"></path>
            </svg>
            Copied to clipboard
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-copy"
            >
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
            </svg>
            naimur.rezaa@gmail.com
          </>
        )}
      </button>
    </div>
  );
};

export default ConnectButtons;
