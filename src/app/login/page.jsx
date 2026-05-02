"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Login() {
  const { login, googleLogin } = useAuth();
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;

    try {
      await login(email, pass);
      toast.success("Login success");
      router.push("/");
    } catch {
      toast.error("Login failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Login</h2>

      <form onSubmit={handleLogin} className="space-y-3">
        <input name="email" placeholder="Email" className="input w-full" />
        <input name="password" type="password" placeholder="Password" className="input w-full" />
        <button className="btn btn-primary w-full">Login</button>
      </form>

      <button onClick={googleLogin} className="btn w-full mt-3">
        Login with Google
      </button>
    </div>
  );
}