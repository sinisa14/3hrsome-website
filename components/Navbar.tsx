"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { href: "#how-it-works", label: "How It Works" },
    { href: "#pricing", label: "Pricing" },
    { href: "#results", label: "Results" },
    { href: "#about", label: "About" },
    {
      href: "https://app.dover.com/dover/careers/858f3e07-2623-40cc-a561-dafc4c291312",
      label: "Talent Hub",
      external: true,
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.08)]">
      <div className="mx-auto max-w-[1200px] px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="block">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 283.5 141.7"
            className="h-24 min-w-[200px] w-auto"
          >
            <g>
              <path
                fill="#2E2D5F"
                d="M50.3,76.8c0.6-0.1,3.8-1.7,3.8-6c0-4.2-2.6-9.2-11.5-9.2c-8.6,0-12.3,4.6-12.3,11h0v0.3h6.4v-0.2c0-3.3,1.8-5.1,5.5-5.1c2.9,0,5.9,0.3,5.9,3.3c0,2.4-3.7,3.5-8.8,3.5c0,1.7,0,3,0,4.9c3.8,0,9.6,0.4,9.6,3.6c0,3.6-5.6,3.3-6.7,3.3c-2.9,0-5.5-1.1-5.5-5.3v-0.1h-6.4V81h0c0,4.9,1.7,11,11.8,11c11.1,0,12.8-5.9,12.8-8.7C54.9,77.7,50.9,76.9,50.3,76.8z"
              />
              <path
                fill="#FF4500"
                d="M169.4,61.6c-8.7,0-15.4,5.4-15.4,15.2c0,10,6.7,15.2,15.4,15.2c8.7,0,15.4-5.4,15.4-15.2C184.8,66.9,178.1,61.6,169.4,61.6z M169.4,85.4c-5.2,0-9-2.6-9-8.6c0-6,3.8-8.6,9-8.6c5.2,0,9,2.7,9,8.6C178.4,82.6,174.6,85.4,169.4,85.4z"
              />
              <polygon
                fill="#FF4500"
                points="214.8,61.6 212.7,61.6 206.6,86 206,86 200,61.6 198.4,61.6 198.4,61.6 188.6,61.6 188.6,92 195.2,92 195.2,69.4 195.9,69.4 201.7,92 211.2,92 217,69.4 217.7,69.4 217.7,92 224.3,92 224.3,61.6 214.8,61.6"
              />
              <ellipse
                fill="#2E2D5F"
                transform="matrix(0.3827 -0.9239 0.9239 0.3827 8.2577 120.6549)"
                cx="94.4"
                cy="54.1"
                rx="4.4"
                ry="4.4"
              />
              <ellipse
                fill="#2E2D5F"
                transform="matrix(0.9871 -0.1602 0.1602 0.9871 -7.8721 10.6421)"
                cx="62.1"
                cy="54.1"
                rx="4.4"
                ry="4.4"
              />
              <path
                fill="#2E2D5F"
                d="M82.7,64.5c2.5,0,4.4-2,4.4-4.4c0-2.5-2-4.5-4.4-4.5c-2.5,0-4.4,2-4.4,4.5C78.3,62.5,80.3,64.5,82.7,64.5z"
              />
              <polygon
                fill="#FF4500"
                points="234.7,67.6 253.1,67.6 253.1,61.6 228.1,61.6 228.1,92 234.7,92 234.7,92 253.1,92 253.1,86 234.7,86 234.7,83.3 234.7,79.8 253.1,79.8 253.1,73.8 234.7,73.8 234.7,70"
              />
              <path
                fill="#2E2D5F"
                d="M117.8,71.7c0-10.2-8.1-10.2-11.8-10.2c-1.8,0-14.9,0-14.9,0v15.2H86v-9.3h-6.6v9.3H65.4v-3V61.6h-6.6V92h6.6v-9.3h14.1V92H86v-9.3h5.1V92h6.6v-9.3h9l3.8,9.3h7.2L113,80.9C115.7,79.5,117.8,77,117.8,71.7z M105.5,76.8c-0.6,0-6.3,0-7.7,0v-9.3c1.7,0,6.6,0,7.8,0c2.1,0,6.1,0,6.1,4.6C111.6,76.8,107.3,76.8,105.5,76.8z"
              />
              <path
                fill="#FF4500"
                d="M135.2,61.6c-9.8,0-13.6,4.9-13.6,9.2c0,5.5,4.7,7.8,13.7,8.7c5.9,0.6,8,1.2,8,3.3c0,2.3-2.1,3.5-7,3.5c-3.9,0-7.8-0.7-7.9-5.2v-0.2h-6.7v0.4h0c0,3.1,0.4,10.9,14.8,10.9c8.8,0,13.8-1.9,13.8-9.3c0-6.8-7.6-8.2-14.4-8.9c-5.4-0.5-7.4-1.4-7.4-3c0-1.5,1.8-3.3,6.9-3.3c6.2,0,8.1,3.1,8.1,5.2v0.2h6.9v-0.2C150.2,68.1,146.9,61.6,135.2,61.6z"
              />
            </g>
          </svg>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-sm font-medium text-brand-blue hover:text-brand-orange transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://tidycal.com/sinisaj/build-your-team-call"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-orange text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-brand-orange-hover transition-colors"
          >
            Book a Call
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden relative w-7 h-5 z-[1001] bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block absolute left-0 w-full h-[2.5px] bg-brand-blue rounded transition-all duration-300 ${
              menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
            }`}
          />
          <span
            className={`block absolute left-0 w-full h-[2.5px] bg-brand-blue rounded transition-all duration-300 top-1/2 -translate-y-1/2 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block absolute left-0 w-full h-[2.5px] bg-brand-blue rounded transition-all duration-300 ${
              menuOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-[72px] left-0 right-0 bottom-0 bg-white z-[999] flex flex-col items-center pt-10 gap-6 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-lg font-semibold text-brand-blue hover:text-brand-orange"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://tidycal.com/sinisaj/build-your-team-call"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-3 bg-brand-orange text-white px-8 py-3.5 rounded-md text-base font-semibold hover:bg-brand-orange-hover transition-colors text-center"
          >
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
}
