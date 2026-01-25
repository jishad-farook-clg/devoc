import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LoadingProvider from "@/components/LoadingProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://devoc.bvocfarookcollege.com"),

  title: "DeVoc | Project-Based Software Development & Hybrid Coding Program",
  description:
    "Master real-world coding skills with DeVoc's hybrid learning model. From basic web dev to advanced capstone projects, get mentorship, soft skills, and career prep.",

  openGraph: {
    title: "DeVoc | Project-Based Software Development",
    description:
      "Project-based hybrid coding program with mentorship and real-world experience.",
    url: "https://devoc.bvocfarookcollege.com",
    siteName: "DeVoc",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "DeVoc - Project Based Software Development",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DeVoc",
    description:
      "Learn coding with real projects, mentorship, and hybrid learning.",
    images: ["/opengraph-image.png"],
  },

  keywords: [
    "Hybrid software development course",
    "Project-based coding program",
    "Web development",
    "Full-stack development",
    "Mentorship for developers",
  ],
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
