"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic validation
    if (!form.name || !form.email || !form.phone || !form.address) {
      toast.error("All fields required!");
      return;
    }

    toast.success("Booking successful!");

    // reset form
    setForm({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-3">
      <input
        type="text"
        placeholder="Your Name"
        className="input input-bordered w-full"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        type="email"
        placeholder="Email"
        className="input input-bordered w-full"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="text"
        placeholder="Phone"
        className="input input-bordered w-full"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <input
        type="text"
        placeholder="Address"
        className="input input-bordered w-full"
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      />

      <button className="btn btn-primary w-full">
        Book Now
      </button>
    </form>
  );
}