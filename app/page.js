import { pokemonList } from "../data/pokemon";
import SearchBar from "../components/SearchBar";
import PokemonList from "../components/PokemonList";

export default function Home() {
  return (
    <div>
      <h1 className="page-title">Pokédex Mini</h1>
      <p className="muted">Daftar Pokémon favorit kita</p>

      <SearchBar />
      <PokemonList pokemons={pokemonList} />
    </div>
  );
}