This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Starter Code

### `app/globals.css`

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #f3f4f8;
  color: #1f2937;
  font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 24px;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ef4444;
  color: white;
  padding: 16px 24px;
}

.brand {
  font-weight: 700;
  font-size: 1.25rem;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links a:hover {
  text-decoration: underline;
}

/* Judul & search */
.page-title {
  margin: 0 0 4px;
  font-size: 1.8rem;
}

.muted {
  color: #6b7280;
}

.search-bar {
  width: 100%;
  padding: 12px 16px;
  margin: 16px 0 24px;
  font-size: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 10px;
}

/* Daftar & kartu */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: 16px;
}

.card {
  display: block;
  background: white;
  border-radius: 14px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: transform 0.15s;
}

.card:hover {
  transform: translateY(-4px);
}

.card img {
  width: 96px;
  height: 96px;
  image-rendering: pixelated;
}

.card h2 {
  margin: 8px 0;
  font-size: 1.1rem;
}

/* Badge tipe */
.badge {
  display: inline-block;
  padding: 2px 12px;
  border-radius: 999px;
  font-size: 0.85rem;
  color: white;
  background: #6b7280;
  text-transform: capitalize;
}

.badge-grass { background: #22c55e; }
.badge-fire { background: #f97316; }
.badge-water { background: #3b82f6; }
.badge-electric { background: #eab308; }
.badge-ghost { background: #7c3aed; }
.badge-psychic { background: #ec4899; }
.badge-rock { background: #a8a29e; }
.badge-normal { background: #9ca3af; }

/* Halaman detail */
.detail {
  background: white;
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  max-width: 480px;
  margin: 0 auto;
}

.detail img {
  image-rendering: pixelated;
}

.back {
  display: inline-block;
  margin-bottom: 16px;
  color: #ef4444;
  font-weight: 600;
}

/* Halaman about */
.about p {
  line-height: 1.7;
}
```

### `data/pokemon.js`

```js
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
```

### `components/SearchBar.js`

```jsx
export default function SearchBar() {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Cari Pokémon..."
    />
  );
}
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.