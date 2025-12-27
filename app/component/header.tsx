"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../../assets/logo.png"
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [navCollapsed, setNavCollapsed] = useState(true);

  return (
    <header className="border border-white/5 z-50 sticky top-0 left-0 bg-white">
      
      {/* Top Nav */}
      <nav className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <Image  src={'/image/logo.png'} alt="logo" width={100} height={100} className="w-16"/>

        <div className="hidden md:flex items-center gap-5">
          <Link href="/" className="text-sm font-medium text-muted">Home</Link>
          <Link href="/music" className="text-sm font-medium text-muted">Music</Link>
          <Link href="/about" className="text-sm font-medium text-muted">About me</Link>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden md:block bg-primary text-card px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90">
            Subscribe
          </button>

          <AiOutlineMenu
            size={28}
            className="md:hidden cursor-pointer"
            onClick={() => setNavCollapsed(false)}
          />
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`
          fixed inset-0 bg-black/40
          transition-opacity duration-300
          ${navCollapsed ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
        onClick={() => setNavCollapsed(true)}
      />

      {/* Slide Menu */}
      <aside
        className={`
          fixed inset-y-0 left-0
          w-3/4 max-w-xs
          bg-background
          p-10
          flex flex-col gap-6
          transform
          transition-transform duration-300 ease-out
          ${navCollapsed ? "-translate-x-full" : "translate-x-0"}
        `}
      >
        <AiOutlineClose
          size={28}
          className="self-end cursor-pointer"
          onClick={() => setNavCollapsed(true)}
        />

        <Link href="/" onClick={() => setNavCollapsed(true)} className="text-muted">Home</Link>
        <Link href="/music" onClick={() => setNavCollapsed(true)} className="text-muted">Music</Link>
        <Link href="/about" onClick={() => setNavCollapsed(true)} className="text-muted">About me</Link>

        <button className="mt-4 bg-primary text-card px-4 py-2 rounded-lg text-sm font-medium">
          Subscribe
        </button>
      </aside>

    </header>
  );
};

export default Header;
