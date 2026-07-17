'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-purple-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">Hypnotherapy Roseville</Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-purple-300">Home</Link>
          <Link href="/about" className="hover:text-purple-300">About</Link>
          <Link href="/services" className="hover:text-purple-300">Services</Link>
          <Link href="/blog" className="hover:text-purple-300">Blog</Link>
          <Link href="/contact" className="hover:text-purple-300">Contact</Link>
          <a href="tel:+14153220298" className="text-purple-300 font-bold">(415) 322-0298</a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)}>☰</button>
      </div>
      {open && <nav className="md:hidden px-4 pb-4 space-y-2"><Link href="/" className="block">Home</Link><Link href="/about" className="block">About</Link><Link href="/services" className="block">Services</Link><Link href="/blog" className="block">Blog</Link><Link href="/contact" className="block">Contact</Link></nav>}
    </header>
  );
}
