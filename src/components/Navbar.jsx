"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <div className="navbar bg-base-100 shadow-md px-6">
      <div className="flex-1">
        <Link href="/" className="text-xl font-bold text-green-700">
          QurbaniHat
        </Link>
      </div>

      <div className="flex gap-4 items-center">
        <Link href="/" className="hover:text-green-600">Home</Link>
        <Link href="/animals" className="hover:text-green-600">All Animals</Link>

        {
          user ? (
            <>
              
              <button onClick={logout} className="btn btn-sm btn-error">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="btn btn-sm btn-outline">Login</Link>
              <Link href="/register" className="btn btn-sm btn-primary">Register</Link>
            </>
          )
        }

      </div>
    </div>
  );
}