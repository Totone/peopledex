import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/ui/_config/globals.css";
import Link from "next/link";
import { Button } from "@/ui/primitives/button";
import { Search, UserPlus } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PeopleDex - Votre carnet de contacts",
  description: "Comme un Pokedex, mais pour les humains!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <div className="min-w-[350px]">
            <header className="border-b p-4">
              <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                  PeopleDex
                </Link>
                <nav className="flex gap-2">
                  <Button asChild variant="outline" size="icon">
                    <Link href="/list">
                      <Search className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="icon">
                    <Link href="/add">
                      <UserPlus className="h-4 w-4" />
                    </Link>
                  </Button>
                </nav>
              </div>
            </header>
            <main className="flex-1 container mx-auto p-4">{children}</main>
            <footer className="border-t p-4">
              <div className="container mx-auto text-center text-sm text-gray-500">
                PeopleDex &copy; {new Date().getFullYear()}
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
