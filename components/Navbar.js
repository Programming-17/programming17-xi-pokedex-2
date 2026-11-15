import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="brand">
        Pokédex Mini
      </Link>
      <div className="nav-links">
        <Link href="/">Beranda</Link>
        <Link href="/about">Tentang</Link>
      </div>
    </nav>
  );
}
