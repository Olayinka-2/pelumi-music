"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Youtube, Music } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        bg-linear-to-br
        from-white
        via-[#e4e4e4]
        to-[#e6f0fa]
        border-t
      "
    >
      <section className="max-w-7xl mx-auto px-6 py-14">
        {/* Top */}
        <div className="grid gap-10 md:grid-cols-3 items-start">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/image/logo.png"
                width={60}
                height={60}
                alt="Child of YHWH logo"
              />
              <p className="font-semibold text-lg text-primary">
                Child of YHWH
              </p>
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-sm">
              A gospel music ministry dedicated to raising Christ-centered
              sounds that inspire worship, faith, and devotion to God.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="font-semibold text-primary">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/music" className="hover:text-primary">
                  Music
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-3">
            <h4 className="font-semibold text-primary">Follow the Ministry</h4>
            <div className="flex gap-4">
              <Link
                href="#"
                className="p-2 rounded-full bg-white shadow hover:bg-primary hover:text-white transition"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="#"
                className="p-2 rounded-full bg-white shadow hover:bg-primary hover:text-white transition"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="#"
                className="p-2 rounded-full bg-white shadow hover:bg-primary hover:text-white transition"
              >
                <Youtube size={18} />
              </Link>
              <Link
                href="#"
                className="p-2 rounded-full bg-white shadow hover:bg-primary hover:text-white transition"
              >
                <Music size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t" />

        {/* Bottom */}
        <div className="text-center text-sm text-muted">
          © {currentYear} Child of YHWH. All rights reserved.
        </div>
      </section>
    </footer>
  );
};

export default Footer;
