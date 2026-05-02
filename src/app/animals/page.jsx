"use client";

import animalsData from "@/data/animals.json";
import { useState } from "react";
import AnimalCard from "@/components/AnimalCard";

export default function AnimalsPage() {
  const [animals, setAnimals] = useState(animalsData);

  // 🔽 Low → High
  const sortLowToHigh = () => {
    const sorted = [...animals].sort((a, b) => a.price - b.price);
    setAnimals(sorted);
  };

  // 🔼 High → Low
  const sortHighToLow = () => {
    const sorted = [...animals].sort((a, b) => b.price - a.price);
    setAnimals(sorted);
  };

  return (
    <div className="mt-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        All Animals
      </h1>

      {/* 🔥 SORT BUTTON */}
      <div className="flex justify-center gap-4 mb-6">
        <button onClick={sortLowToHigh} className="btn btn-outline btn-sm">
          Price: Low → High
        </button>

        <button onClick={sortHighToLow} className="btn btn-outline btn-sm">
          Price: High → Low
        </button>
      </div>

      {/* Animal Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        {animals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
}