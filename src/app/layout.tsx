import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/design-systems/Organisms/Header";
import { ContextProvider } from "@/context/wagmiContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OpenOcean | The largest NFT marketplace",
  description: "The largest NFT marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ContextProvider>
        <Header />
        {
      children}
      </ContextProvider>
      </body>
    </html>
  );
}
