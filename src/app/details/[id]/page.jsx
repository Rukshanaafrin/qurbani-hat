import animals from "@/data/animals.json";
import BookingForm from "@/components/BookingForm";
import PrivateRoute from "@/components/PrivateRoute"; // 👈 add

export default async function DetailsPage({ params }) {
  const { id } = await params;

  const animal = animals.find((a) => a.id === Number(id));

  if (!animal) {
    return <div className="text-center mt-10">Animal not found</div>;
  }

  return (
    <PrivateRoute> {/* 👈 add */}
      <div className="max-w-3xl mx-auto mt-10 text-center">
        <img
          src={animal.image}
          className="w-full max-w-md h-80 object-cover mx-auto rounded-lg shadow"
        />

        <h1 className="text-3xl font-bold mt-4 text-center">
          {animal.name}
        </h1>

        <div className="text-center mt-4 space-y-1">
          <p>Type: {animal.type}</p>
          <p>Breed: {animal.breed}</p>
          <p>Price: {animal.price} BDT</p>
          <p>Weight: {animal.weight} kg</p>
          <p>Age: {animal.age} years</p>
          <p>Location: {animal.location}</p>
        </div>

        <p className="mt-4 text-center">{animal.description}</p>

        {/* 🔥 Booking Form */}
        <BookingForm />
      </div>
    </PrivateRoute> // 👈 add
  );
}