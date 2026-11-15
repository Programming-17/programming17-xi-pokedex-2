import Link from "next/link";
import { notFound } from "next/navigation";
import { pokemonList } from "../../../data/pokemon";

export function generateStaticParams() {
  return pokemonList.map((p) => ({ id: String(p.id) }));
}

export default async function DetailPage({ params }) {
  const { id } = await params;
  const pokemon = pokemonList.find((p) => p.id === Number(id));

  if (!pokemon) {
    notFound();
  }

  return (
    <div className="detail">
      <Link href="/" className="back">
        ← Kembali
      </Link>
      <img src={pokemon.image} alt={pokemon.name} width="200" height="200" />
      <h1>{pokemon.name}</h1>
      <span className={`badge badge-${pokemon.type}`}>{pokemon.type}</span>
      <p>{pokemon.deskripsi}</p>
      <p className="muted">No. #{pokemon.id}</p>
    </div>
  );
}