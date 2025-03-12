import Navbar from "@/components/shared/Navbar";
import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const mono = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naimur Reza | Softaware Engineer",
  description:
    "Naimur Reza is a professional web develper based in Banlgadehs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mono.className}   antialiased`}>
        <Navbar />
        <ThemeProvider defaultTheme="system" attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
