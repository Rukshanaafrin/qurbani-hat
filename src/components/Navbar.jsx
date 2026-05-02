"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md px-6">
      <div className="flex-1">
        <Link href="/" className="text-xl font-bold text-green-700">
          QurbaniHat
        </Link>
      </div>

      <div className="flex gap-4">
        <Link href="/" className="hover:text-green-600">Home</Link>
        <Link href="/animals" className="hover:text-green-600">All Animals</Link>
        <Link href="/login" className="btn btn-sm btn-outline">Login</Link>
        <Link href="/register" className="btn btn-sm btn-primary">Register</Link>
      </div>
    </div>
  );
}