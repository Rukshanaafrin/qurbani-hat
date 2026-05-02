import animals from "@/data/animals.json";
import AnimalCard from "@/components/AnimalCard";

export default function AnimalsPage() {
  const sortedAnimals = [...animals].sort((a, b) => a.price - b.price);

  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        All Animals
      </h1>

      <div className="grid md:grid-cols-4 gap-6">
        {sortedAnimals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
}