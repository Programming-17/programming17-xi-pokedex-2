const daftar = [
  { id: 1, name: "Bulbasaur", type: "grass", deskripsi: "Pokémon biji yang membawa benih di punggungnya sejak lahir." },
  { id: 4, name: "Charmander", type: "fire", deskripsi: "Api di ujung ekornya menandakan kesehatan dan semangatnya." },
  { id: 7, name: "Squirtle", type: "water", deskripsi: "Cangkangnya melindungi tubuh dan memudahkan berenang." },
  { id: 25, name: "Pikachu", type: "electric", deskripsi: "Menyimpan listrik di kantong pipinya dan melepaskannya saat terancam." },
  { id: 39, name: "Jigglypuff", type: "normal", deskripsi: "Menyanyikan lagu yang membuat lawannya mengantuk." },
  { id: 52, name: "Meowth", type: "normal", deskripsi: "Suka benda berkilau dan aktif di malam hari." },
  { id: 54, name: "Psyduck", type: "water", deskripsi: "Selalu sakit kepala, tetapi bisa mengeluarkan kekuatan aneh saat pusing." },
  { id: 74, name: "Geodude", type: "rock", deskripsi: "Sering tertukar dengan batu biasa di jalan setapak gunung." },
  { id: 94, name: "Gengar", type: "ghost", deskripsi: "Bersembunyi di bayangan dan suka menakut-nakuti." },
  { id: 133, name: "Eevee", type: "normal", deskripsi: "Punya gen yang tidak stabil sehingga bisa berevolusi ke banyak bentuk." },
  { id: 143, name: "Snorlax", type: "normal", deskripsi: "Makan banyak lalu tidur sepanjang hari." },
  { id: 150, name: "Mewtwo", type: "psychic", deskripsi: "Dibuat dari rekayasa genetika dengan kekuatan psikis sangat besar." },
];

export const pokemonList = daftar.map((p) => ({
  ...p,
  image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`,
}));