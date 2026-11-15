import SearchBar from "./SearchBar";
import PokemonList from "./PokemonList";

export default function PokemonBrowser({ ___ }) {
  return (
    <div>
      {/* TODO: kirim placeholder "Cari nama Pokémon..." ke SearchBar */}
      <SearchBar ___="Cari nama Pokémon..." />
      {/* TODO: teruskan pokemons ke PokemonList */}
      <PokemonList ___={___} />
    </div>
  );
}