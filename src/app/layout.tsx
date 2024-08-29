import type { Metadata } from "next";
import { ToastContainer } from 'react-toastify';
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/design-systems/Organisms/Header";
import { ContextProvider } from "@/context/wagmiContext";
import 'react-toastify/dist/ReactToastify.css';

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
           <ToastContainer />
      </ContextProvider>
      </body>
    </html>
  );
}
