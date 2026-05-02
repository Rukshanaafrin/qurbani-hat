import Link from "next/link";

export default function AnimalCard({ animal }) {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-2xl hover:scale-[1.02] transition duration-300 relative">

      {/* Badge */}
      <span className="badge bg-black text-white absolute top-2 left-2">
        {animal.type}
      </span>

      <figure>
        <img
          src={animal.image}
          alt={animal.name}
          className="h-44 w-full object-cover"
        />
      </figure>

      <div className="card-body text-center">

        {/* Name */}
        <h2 className="card-title justify-center text-black">
          {animal.name}
        </h2>

        {/* Breed */}
        <p className="text-black text-sm">
          {animal.breed}
        </p>

        {/* Price */}
        <p className="font-semibold text-lg text-black">
        Price: {animal.price}
        </p>

        {/* Location */}
        <p className="text-black text-sm">
        Location: {animal.location}
        </p>

        {/* Description */}
        <p className="text-gray-600 text-xs mt-2 line-clamp-2">
          {animal.description}
        </p>

        {/* Button */}
        <div className="card-actions justify-center mt-3">
          <Link href={`/details/${animal.id}`}>
            <button className="btn btn-sm bg-green-600 text-white hover:bg-green-700 border-none">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}