import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LoadingProvider from "@/components/LoadingProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DeVoc - Learn Coding. Pay Flexibly.",
  description: "Making coding education accessible with flexible payment options and hybrid learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <LoadingProvider>
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
