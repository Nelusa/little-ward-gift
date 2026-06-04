import type { Metadata } from "next";
import { Cinzel, Inter, Rajdhani } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  title: "A Gift Awaits",
  description: "The making of your little ward",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className={`${rajdhani.variable} ${inter.variable} ${cinzel.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
