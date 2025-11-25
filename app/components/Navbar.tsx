"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
   <header className="navbar-hover fixed top-0 left-0 w-full bg-transparent z-30 text-white font-bold text-[18px] font-serif">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between w-full">

          {/* Brand */}
         <Link href="/" className="flex items-center space-x-2">
          <img
            src="/logo/logo.png"
            width={50}
            height={50}
            alt="Ryuu Technology Solutions"
            className="object-contain"
          />
          <span className="text-lg font-semibold">Ryuu Technology Solutions</span>
        </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="transition-colors duration-300">Home</Link>
            <Link href="/about" className="transition-colors duration-300">About</Link>
            <Link href="/services" className="transition-colors duration-300">Products</Link>
            <Link href="/services" className="transition-colors duration-300">Contact Us</Link>
            
            {/* Email */}
            <a
              href="mailto:ryuutechnologysolutions@gmail.com"
              className="flex items-center space-x-2 transition-colors duration-300"
            >
              <img 
                src="/icons/mail.png"
                alt="Email"
                className="w-5 h-5 object-contain"
              />
              <span className="text-sm">
                ryuutechnologysolutions@gmail.com
              </span>
            </a>


            {/* WhatsApp */}
            <a
              href="https://wa.me/qr/Y36V2DNBH3RVO1" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center py-2 space-x-2 transition-colors duration-300"
            >
              <img 
                src="/icons/whatsapp.png"
                alt="WhatsApp"
                className="w-7 h-7 object-contain"
              />
              <span className="text-sm">
                +91 9876543210
              </span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 focus:outline-none"
          >
            {open ? (
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t">
          <div className="space-y-1 px-4 py-3">
            <Link href="/" className="block py-2">Home</Link>
            <Link href="/about" className="block py-2">About</Link>
            <Link href="/services" className="block py-2">Services</Link>
            <Link href="/contact Us" className="block py-2">Contact</Link>
            
             {/* Email */}
            <a
              href="mailto:ryuutechnologysolutions@gmail.com"
              className="flex items-center space-x-2 transition-colors duration-300"
            >
              <img 
                src="/icons/mail.png"
                alt="Email"
                className="w-5 h-5 object-contain"
              />
              <span className="text-sm">
                ryuutechnologysolutions@gmail.com
              </span>
            </a>


            {/* WhatsApp */}
            <a
              href="https://wa.me/qr/Y36V2DNBH3RVO1" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center py-2 space-x-2 transition-colors duration-300"
            >
              <img 
                src="/icons/whatsapp.png"
                alt="WhatsApp"
                className="w-7 h-7 object-contain"
              />
              <span className="text-sm">
                +91 9876543210
              </span>
            </a>

            </div>
          </div>
        
      )}
    </header>
  );
}
