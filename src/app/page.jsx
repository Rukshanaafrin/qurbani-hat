import animals from "@/data/animals.json";
import AnimalCard from "@/components/AnimalCard";

export default function Home() {
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        Featured Animals
      </h1>

      <div className="grid md:grid-cols-4 gap-6">
        {animals.slice(0, 4).map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
}