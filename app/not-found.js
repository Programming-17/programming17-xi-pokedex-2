import Link from "next/link";

export default function NotFound() {
  return (
    <div className="detail">
      <h1>Pokémon tidak ditemukan</h1>
      <p className="muted">Data yang kamu cari tidak ada.</p>
      <Link href="/" className="back">
        ← Kembali ke beranda
      </Link>
    </div>
  );
}