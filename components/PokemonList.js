import PokemonCard from "./PokemonCard";

export default function PokemonList({ pokemons }) {
  return (
    <div className="grid">
      {pokemons.map((p) => (
        <PokemonCard
          key={p.id}
          id={p.id}
          name={p.name}
          type={p.type}
          image={p.image}
        />
      ))}
    </div>
  );
}