"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function UpdateProfile() {
  const { updateUserProfile } = useAuth();
  const router = useRouter();

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await updateUserProfile(name, photo);
      toast.success("Profile updated 🎉");
      router.push("/my-profile");
    } catch {
      toast.error("Update failed ❌");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Update Profile
      </h1>

      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          placeholder="New Name"
          className="input input-bordered w-full"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Photo URL"
          className="input input-bordered w-full"
          onChange={(e) => setPhoto(e.target.value)}
        />

        <button className="btn btn-primary w-full">
          Update
        </button>
      </form>
    </div>
  );
}