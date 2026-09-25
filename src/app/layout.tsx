import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sahil Raj | Full Stack Developer",
  description: "Portfolio of Sahil Raj, a Full Stack Developer building scalable systems. View my projects, experience, and skills.",
  keywords: ["Sahil Raj", "Full Stack Developer", "Next.js", "React", "Portfolio", "Software Engineer"],
  authors: [{ name: "Sahil Raj" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sahilraj.dev", // Example URL
    title: "Sahil Raj | Full Stack Developer",
    description: "Building scalable systems, one commit at a time.",
    siteName: "Sahil Raj Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-dots min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
