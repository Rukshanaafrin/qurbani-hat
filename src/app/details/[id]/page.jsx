import animals from "@/data/animals.json";
import BookingForm from "@/components/BookingForm";
import PrivateRoute from "@/components/PrivateRoute";

export default async function DetailsPage({ params }) {
  const { id } = await params;

  const animal = animals.find((a) => a.id === Number(id));

  if (!animal) {
    return <div className="text-center mt-10">Animal not found</div>;
  }

  return (
    <PrivateRoute>
      <div className="max-w-5xl mx-auto mt-10 px-4">

        {/* Main Card */}
        <div className="bg-gradient-to-br from-green-50 to-white shadow-xl rounded-3xl p-6 md:p-10">

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={animal.image}
              className="w-full md:w-[500px] h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition duration-300"
            />
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-center mt-6 text-green-700">
            {animal.name}
          </h1>

          {/* Info Grid */}
          <div className="grid md:grid-cols-3 gap-4 mt-6 text-black">

            <div className="bg-white shadow rounded-xl p-3">
              <p className="font-semibold">Type</p>
              <p>{animal.type}</p>
            </div>

            <div className="bg-white shadow rounded-xl p-3">
              <p className="font-semibold">Breed</p>
              <p>{animal.breed}</p>
            </div>

            <div className="bg-white shadow rounded-xl p-3">
              <p className="font-semibold">Price</p>
              <p>৳ {animal.price}</p>
            </div>

            <div className="bg-white shadow rounded-xl p-3">
              <p className="font-semibold">Weight</p>
              <p>{animal.weight} kg</p>
            </div>

            <div className="bg-white shadow rounded-xl p-3">
              <p className="font-semibold">Age</p>
              <p>{animal.age} years</p>
            </div>

            <div className="bg-white shadow rounded-xl p-3">
              <p className="font-semibold">Location</p>
              <p>{animal.location}</p>
            </div>

          </div>

          {/* Description */}
          <p className="text-center text-gray-600 mt-6 italic max-w-2xl mx-auto">
            {animal.description}
          </p>

          {/* Divider */}
          <div className="divider my-8 text-green-700 font-semibold">
            Book This Animal
          </div>

          {/* Booking Form Card */}
          <div className="bg-white shadow-lg rounded-2xl p-5">
            <BookingForm />
          </div>

        </div>
      </div>
    </PrivateRoute>
  );
}