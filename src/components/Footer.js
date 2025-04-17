"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="bg-black py-6 px-4 mt-auto">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Logo dan Deskripsi */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center">
  <Image
    src="/images/logonvd.gif"
    alt="Logo"
    width={64} // kamu bisa sesuaikan nilai ini
    height={64} // ini juga bisa disesuaikan
    className="h-16 w-auto"
  />
</div>
          <p className="text-sm text-gray-400 mt-2 text-center md:text-left">
            Portal Berita & Top Up Game Terpercaya di Indonesia.
          </p>
        </div>

        {/* Peta Situs */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <p className="text-white font-semibold mb-2">Peta Situs</p>
          <Link href="/" className="text-sm text-gray-400 hover:underline">
            Home
          </Link>
          <Link href="/blogs" className="text-sm text-gray-400 hover:underline">
            Artikel
          </Link>
          <Link href="/about" className="text-sm text-gray-400 hover:underline">
            Tentang Kami
          </Link>
          <Link href="/kontak" className="text-sm text-gray-400 hover:underline">
            Kontak
          </Link>
        </div>

        {/* Ikon Sosial Media */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <p className="text-sm text-white">Ikuti kami di:</p>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" className="text-gray-400 hover:text-white">
              <IconBrandFacebook size={22} />
            </a>
            <a href="https://twitter.com" target="_blank" className="text-gray-400 hover:text-white">
              <IconBrandTwitter size={22} />
            </a>
            <a href="https://instagram.com" target="_blank" className="text-gray-400 hover:text-white">
              <IconBrandInstagram size={22} />
            </a>
            <a href="https://youtube.com" target="_blank" className="text-gray-400 hover:text-white">
              <IconBrandYoutube size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-6">
        &copy; {new Date().getFullYear()} NVDSTORE INDONESIA. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
