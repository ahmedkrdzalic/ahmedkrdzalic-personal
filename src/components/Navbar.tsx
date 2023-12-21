"use client";
import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav className="fixed top-0 flex flex-wrap w-full items-center justify-between px-2 bg-primary_darker mb-3 border-b border-accent_lighter z-50 opacity-95">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto px-2 lg:static lg:block lg:justify-start">
          <Link href="/" className="leading-relaxed inline-block mr-2">
            <img className="h-16" src="AK-logo-no-bg-stroke.png" alt="Logo" />
          </Link>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <span className="block relative w-6 h-px rounded-sm bg-white"></span>
            <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
          </button>
        </div>
        <div
          className={`lg:flex flex-grow items-center ${
            isNavOpen ? "" : "hidden"
          }`}
        >
          <div className="invisible lg:visible flex flex-grow items-center">
            <hr className="md:mr-2 h-4 w-px border-transparent bg-gray-700 lg:mr-3" />
            <Link
              href="https://github.com/ahmedkrdzalic"
              className="leading-relaxed inline-block mx-2"
              target="_blank"
            >
              <img className="h-6" src="social/github.png" alt="Github Logo" />
            </Link>

            <Link
              href="https://linkedin.com/ahmedkrdzalic"
              className="leading-relaxed inline-block mx-2"
              target="_blank"
            >
              <img
                className="h-6"
                src="social/linkedin.png"
                alt="Github Logo"
              />
            </Link>
          </div>

          <ul className="flex flex-col lg:flex-row list-none ml-auto">
            <li className="nav-item">
              <div className="border-solid border hover:border rounded border-accent hover:border-accent_lighter">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-accent_lighter"
                  href="#pablo"
                >
                  Blog
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-accent_lighter"
                href="#pablo"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-accent_lighter"
                href="#pablo"
              >
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-accent_lighter"
                href="#pablo"
              >
                Projects
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
