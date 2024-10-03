import React from "react";
import FirstSection from "./FirstSection";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-center p-4 text-white">
      <p className="footer-text">
        © 2024 M👀Deng . All Rights Reserved.
        <br />
        <a
          href="#home"
          className="text-green-400 underline hover:text-green-200 py-3"
        >
          Back to top
        </a>
      </p>
    </footer>
  );
}
