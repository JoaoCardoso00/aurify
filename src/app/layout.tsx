import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aurify",
  description: "Aurify - Rastreabilidade do Minério de Ouro",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.aurify.tech",
    title: "Aurify",
    description: "Rastreabilidade do Minério de Ouro Por meio da Blockchain",
    images: [
      {
        url: "/seo.webp",
        width: 760,
        height: 460,
        alt: "Aurify - Rastreabilidade do Minério de Ouro",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
