import type { Metadata } from "next";
import { Montserrat, Heebo } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const heebo = Heebo({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "3HRsome — Pre-Vetted Remote Talent for US Startups",
  description:
    "We deliver a shortlist of pre-vetted Eastern European professionals in 7 days. You pay nothing until you hire. Every placement backed by a 3-month replacement guarantee.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${heebo.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
