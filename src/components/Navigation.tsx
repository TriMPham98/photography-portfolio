"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-white">
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`${
                isActive("/")
                  ? "text-white"
                  : "text-gray-400 hover:text-white transition-colors"
              }`}>
              Home
            </Link>
            <Link
              href="/gallery"
              className={`${
                isActive("/gallery")
                  ? "text-white"
                  : "text-gray-400 hover:text-white transition-colors"
              }`}>
              Gallery
            </Link>
            <Link
              href="/about"
              className={`${
                isActive("/about")
                  ? "text-white"
                  : "text-gray-400 hover:text-white transition-colors"
              }`}>
              About
            </Link>
            <Link
              href="/contact"
              className={`${
                isActive("/contact")
                  ? "text-white"
                  : "text-gray-400 hover:text-white transition-colors"
              }`}>
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className={`block px-3 py-2 rounded-md ${
                  isActive("/")
                    ? "bg-white/10 text-white"
                    : "text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
                }`}
                onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link
                href="/gallery"
                className={`block px-3 py-2 rounded-md ${
                  isActive("/gallery")
                    ? "bg-white/10 text-white"
                    : "text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
                }`}
                onClick={() => setIsMenuOpen(false)}>
                Gallery
              </Link>
              <Link
                href="/about"
                className={`block px-3 py-2 rounded-md ${
                  isActive("/about")
                    ? "bg-white/10 text-white"
                    : "text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
                }`}
                onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link
                href="/contact"
                className={`block px-3 py-2 rounded-md ${
                  isActive("/contact")
                    ? "bg-white/10 text-white"
                    : "text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
                }`}
                onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
