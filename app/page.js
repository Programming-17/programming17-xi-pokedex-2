import { pokemonList } from "../data/pokemon";
import SearchBar from "../components/SearchBar";
import PokemonList from "../components/PokemonList";

// TODO: import PokemonBrowser dari "../components/PokemonBrowser"
// import ___ from "___";

export default function Home() {
  return (
    <div>
      <h1 className="page-title">Pokédex Mini</h1>
      <p className="muted">Daftar Pokémon favorit kita</p>

      <SearchBar />
      <PokemonList pokemons={pokemonList} />

      {/* TODO: kirim pokemonList lewat prop pokemons */}
      {/* <PokemonBrowser ___={___} /> */}
    </div>
  );
}