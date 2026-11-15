import Link from "next/link";

export default function PokemonCard({ id, name, type, image }) {
  return (
    <Link href={`/pokemon/${id}`} className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <span className={`badge badge-${type}`}>{type}</span>
    </Link>
  );
}