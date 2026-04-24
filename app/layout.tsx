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
  metadataBase: new URL("https://3hrsome.com"),
  title: "3HRsome | Pre-Vetted Remote Talent for US Startups",
  description:
    "We deliver a shortlist of pre-vetted Eastern European professionals in 7 days. You pay nothing until you hire. Every placement backed by a 3-month replacement guarantee.",
  alternates: {
    canonical: "https://3hrsome.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  keywords: [
    "remote hiring",
    "Eastern Europe talent",
    "startup recruitment",
    "hire remote developers",
    "pre-vetted candidates",
    "US startup hiring",
    "Eastern European developers",
    "remote recruitment agency",
    "hire engineers Eastern Europe",
    "cost-effective hiring",
  ],
  openGraph: {
    title: "3HRsome | Pre-Vetted Remote Talent for US Startups",
    description:
      "Stop paying $180K for a role that costs $75K. Get a shortlist of pre-vetted Eastern European professionals in 7 days. 3-month replacement guarantee.",
    url: "https://3hrsome.com",
    siteName: "3HRsome",
    images: [
      {
        url: "https://3hrsome.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "3HRsome | Pre-Vetted Remote Talent for US Startups",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "3HRsome | Pre-Vetted Remote Talent for US Startups",
    description:
      "Stop paying $180K for a role that costs $75K. Get a shortlist in 7 days. 3-month replacement guarantee.",
    images: ["https://3hrsome.com/og-image.png"],
  },
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
