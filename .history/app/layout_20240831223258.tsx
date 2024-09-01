import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/providers/theme-provider";
<head><link rel="icon" href="/favicon.ico" sizes="any" /></head>

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfólio // Pablo Corrêa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
