"use client";

import { useState } from "react";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#process", label: "Our Process" },
  { href: "/#services", label: "Services" },
  { href: "/shop", label: "Shop" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-green-900/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="text-2xl font-bold tracking-tight text-white">
          Royal<span className="text-green-300"> Roastery</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-green-100 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="rounded-full bg-green-400 px-5 py-2 text-sm font-semibold text-green-900 transition-colors hover:bg-green-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Hamburger button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-green-100 transition-colors hover:bg-green-800 md:hidden"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-1 border-t border-green-800 px-6 pb-6 pt-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 text-base font-medium text-green-100 transition-colors hover:bg-green-800 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-green-400 px-5 py-3 text-center text-sm font-semibold text-green-900 transition-colors hover:bg-green-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}
