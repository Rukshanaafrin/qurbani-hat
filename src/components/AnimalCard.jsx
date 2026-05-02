import Link from "next/link";

export default function AnimalCard({ animal }) {
  return (
    <div className="card bg-base-100 shadow">
      <figure>
        <img
          src={animal.image}
          alt={animal.name}
          className="h-40 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{animal.name}</h2>
        <p>Price: {animal.price} BDT</p>
        <p>Location: {animal.location}</p>

        <div className="card-actions justify-end">
          <Link href={`/details/${animal.id}`}>
            <button className="btn btn-primary btn-sm">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}