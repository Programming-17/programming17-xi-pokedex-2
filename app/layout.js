import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Pokédex Mini",
  description: "Project belajar React dan Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}