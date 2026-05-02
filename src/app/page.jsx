import "animate.css";
import animals from "@/data/animals.json";
import AnimalCard from "@/components/AnimalCard";

export default function Home() {
  return (
    <div className="space-y-12">

      {/* 🔥 HERO SECTION */}
      <section className="mt-12 bg-gradient-to-r from-green-600 to-green-400 text-white py-16 text-center rounded-xl">
        <h1 className="text-4xl font-bold mb-4
        animate__animated animate__fadeInDown animate__slow">
          Welcome to QurbaniHat 
        </h1>
        <p className="mb-6">
          Buy your Qurbani animals easily and safely
        </p>
        <a
          href="/animals"
          className="bg-white text-green-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200
          ">
          Browse Animals
        </a>
      </section>

      {/* 🟢 FEATURED */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8 text-green-700">
          Featured Animals
        </h2>

        <div className="grid md:grid-cols-4 gap-6 px-4">
          {animals.slice(0, 4).map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      </section>

      {/* 🟢 QURBANI TIPS */}
      <section className="max-w-6xl mx-auto px-6 py-12 bg-gray-100 rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-700">
          Qurbani Tips
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 text-center">
            <h3 className="font-semibold mb-2">🐄 Healthy Animal</h3>
            <p>Always choose a healthy and active animal.</p>
          </div>

          <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 text-center">
            <h3 className="font-semibold mb-2">📅 Check Age</h3>
            <p>Ensure the animal meets the required age.</p>
          </div>

          <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 text-center">
            <h3 className="font-semibold mb-2">🌿 Proper Feeding</h3>
            <p>Animals should be fed natural food.</p>
          </div>

        </div>
      </section>

      {/* 🟢 TOP BREEDS */}
      <section className="max-w-6xl mx-auto px-6 py-12 bg-gray-100 rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-700">
          Top Breeds
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 text-center">
            <h3 className="font-semibold">🐄 Deshi Cow</h3>
            <p>Strong and locally raised</p>
          </div>

          <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 text-center">
            <h3 className="font-semibold">🐐 Black Bengal Goat</h3>
            <p>Most popular goat breed</p>
          </div>

          <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 text-center">
            <h3 className="font-semibold">🐄 Australian Cross</h3>
            <p>High weight and quality</p>
          </div>

        </div>
      </section>

    </div>
  );
}