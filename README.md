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

## Changed Code

### `components/PokemonBrowser.js`

```js
"use client";

// TODO 1: import hook state dari "react"
import { ___ } from "react";
import SearchBar from "./SearchBar";
import PokemonList from "./PokemonList";

export default function PokemonBrowser({ pokemons }) {
  // TODO 2: buat state "keyword" dengan nilai awal "pi"
  const [___, ___] = useState(___);

  // TODO 3: filter nama, tidak peka huruf besar/kecil
  const hasil = pokemons.___((p) => p.name.___().includes(keyword.___()));

  return (
    <div>
      <SearchBar placeholder="Cari nama Pokémon..." />
      <p className="muted">
        Kata kunci: "{___}", menampilkan {hasil.length} dari {pokemons.length}{" "}
        Pokémon
      </p>
      <PokemonList pokemons={___} />
    </div>
  );
}
```

### `components/SearchBar.js`

```jsx
"use client";

// TODO: terima value, onChange, dan placeholder dari props
export default function SearchBar({
  ___,
  ___,
  placeholder = "Cari Pokémon...",
}) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder={placeholder}
      value={___}
      onChange={(e) => ___(e.target.___)}
    />
  );
}
```

### `components/PokemonBrowser.js`

```js
"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";
import PokemonList from "./PokemonList";

export default function PokemonBrowser({ pokemons }) {
  // TODO 1: nilai awal state kosong
  const [keyword, setKeyword] = useState(___);

  const hasil = pokemons.filter((p) =>
    p.name.toLowerCase().includes(keyword.toLowerCase()),
  );

  return (
    <div>
      {/* TODO 2: kirim keyword dan setKeyword ke SearchBar */}
      <SearchBar
        value={___}
        onChange={___}
        placeholder="Cari nama Pokémon..."
      />
      <p className="muted">
        Menampilkan {hasil.length} dari {pokemons.length} Pokémon
      </p>
      {/* TODO 3: tampilkan daftar yang sudah difilter */}
      <PokemonList pokemons={___} />
    </div>
  );
}
```

```js
"use client";

// TODO 1: import hook state dari "react"
import { ___ } from "react";
import SearchBar from "./SearchBar";
import PokemonList from "./PokemonList";

export default function PokemonBrowser({ pokemons }) {
  // TODO 2: buat state "keyword" dengan nilai awal "pi"
  const [___, ___] = useState(___);

  // TODO 3: filter nama, tidak peka huruf besar/kecil
  const hasil = pokemons.___((p) =>
    p.name.___().includes(keyword.___())
  );

  return (
    <div>
      <SearchBar placeholder="Cari nama Pokémon..." />
      <p className="muted">
        Kata kunci: "{___}", menampilkan {hasil.length} dari {pokemons.length} Pokémon
      </p>
      <PokemonList pokemons={___} />
    </div>
  );
}
```

```js
"use client";

// TODO: terima value, onChange, dan placeholder dari props
export default function SearchBar({ ___, ___, placeholder = "Cari Pokémon..." }) {
  return (
    <input
      className="search-bar"
      type="text"
      
      placeholder={placeholder}
      value={___}
      onChange={(e) => ___(e.target.___)}
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
