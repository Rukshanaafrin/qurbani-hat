"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Register() {
  const { register, googleLogin } = useAuth();
  const router = useRouter();

  const handle = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const pass = e.target.password.value;

    // 🔴 basic validation
    if (!email || !pass) {
      return toast.error("Email & Password required");
    }

    if (pass.length < 6) {
      return toast.error("Password must be 6+ characters");
    }

    try {
      await register(name, photo, email, pass);

      toast.success("Registered Successfully 🎉");

      router.push("/login");
    } catch (error) {
      console.log(error);

      // 🔥 important: show real error
      toast.error(error.message || "Registration Failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

      <form onSubmit={handle} className="space-y-3">
        <input name="name" placeholder="Name" className="input input-bordered w-full" />

        <input name="photo" placeholder="Photo URL" className="input input-bordered w-full" />

        <input name="email" type="email" placeholder="Email" className="input input-bordered w-full" />

        <input name="password" type="password" placeholder="Password" className="input input-bordered w-full" />

        <button className="btn btn-primary w-full">Register</button>
      </form>

      <button
        onClick={async () => {
          try {
            await googleLogin();
            toast.success("Google Login Success");
            router.push("/");
          } catch (err) {
            toast.error("Google Login Failed");
          }
        }}
        className="btn w-full mt-3"
      >
        Google Register
      </button>
    </div>
  );
}