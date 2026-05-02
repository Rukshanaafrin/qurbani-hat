"use client";

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function MyProfile() {
  const { user } = useAuth();

  if (!user) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto mt-10 text-center">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>

      <img
        src={user.photoURL || "/default.png"}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />

      <h2 className="text-xl font-semibold">
        {user.displayName || "No Name"}
      </h2>

      <p className="text-gray-600">{user.email}</p>

      <Link href="/update-profile">
        <button className="btn btn-primary mt-5">
          Update Profile
        </button>
      </Link>
    </div>
  );
}