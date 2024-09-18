import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Find Your Purpose",
  description: "Find your purpose by answering a series of questions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col h-full">
        <Navbar />
        <div className="flex-grow">{children}</div>
      </body>
    </html>
  );
}
