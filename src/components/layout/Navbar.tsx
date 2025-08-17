"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="group">
              <h1 className="text-2xl md:text-3xl font-light tracking-wider text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                SERENE YOGA
              </h1>
              <div className="h-0.5 bg-gradient-to-r from-emerald-600 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mt-1"></div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <Link
              href="/"
              className="text-sm font-medium tracking-wide text-gray-700 hover:text-emerald-700 transition-all duration-300 relative group uppercase"
            >
              HOME
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="/about"
              className="text-sm font-medium tracking-wide text-gray-700 hover:text-emerald-700 transition-all duration-300 relative group uppercase"
            >
              ABOUT
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="/classes"
              className="text-sm font-medium tracking-wide text-gray-700 hover:text-emerald-700 transition-all duration-300 relative group uppercase"
            >
              CLASSES
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="/retreats"
              className="text-sm font-medium tracking-wide text-gray-700 hover:text-emerald-700 transition-all duration-300 relative group uppercase"
            >
              RETREATS
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="/virtual"
              className="text-sm font-medium tracking-wide text-gray-700 hover:text-emerald-700 transition-all duration-300 relative group uppercase"
            >
              VIRTUAL YOGA
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="/blog"
              className="text-sm font-medium tracking-wide text-gray-700 hover:text-emerald-700 transition-all duration-300 relative group uppercase"
            >
              BLOG
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="/contact"
              className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-6 py-2.5 rounded-full text-sm font-medium tracking-wide hover:shadow-lg hover:scale-105 transition-all duration-300 uppercase"
            >
              CONNECT
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="p-2 rounded-lg text-gray-700 hover:text-emerald-700 hover:bg-gray-50 transition-colors duration-300"
              aria-label="Open menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation (you can expand this with state management) */}
        <div className="md:hidden border-t border-gray-100 py-4 space-y-3">
          <Link
            href="/home"
            className="block text-gray-700 hover:text-emerald-700 py-2 text-sm font-medium tracking-wide uppercase transition-colors duration-300"
          >
            HOME
          </Link>
          <Link
            href="/about"
            className="block text-gray-700 hover:text-emerald-700 py-2 text-sm font-medium tracking-wide uppercase transition-colors duration-300"
          >
            ABOUT
          </Link>
          <Link
            href="/classes"
            className="block text-gray-700 hover:text-emerald-700 py-2 text-sm font-medium tracking-wide uppercase transition-colors duration-300"
          >
            CLASSES
          </Link>
          <Link
            href="/retreats"
            className="block text-gray-700 hover:text-emerald-700 py-2 text-sm font-medium tracking-wide uppercase transition-colors duration-300"
          >
            RETREATS
          </Link>
          <Link
            href="/virtual"
            className="block text-gray-700 hover:text-emerald-700 py-2 text-sm font-medium tracking-wide uppercase transition-colors duration-300"
          >
            VIRTUAL YOGA
          </Link>
          <Link
            href="/blog"
            className="block text-gray-700 hover:text-emerald-700 py-2 text-sm font-medium tracking-wide uppercase transition-colors duration-300"
          >
            BLOG
          </Link>
          <Link
            href="/contact"
            className="block bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium tracking-wide text-center uppercase mt-4"
          >
            CONNECT
          </Link>
        </div>
      </div>
    </header>
  );
}
