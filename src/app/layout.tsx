import type { Metadata } from "next";
import { Roboto_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const robotoMono = Roboto_Mono({
  variable: "--font-inter", // keeping the variable name same so we don't break CSS
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-outfit", // keeping the variable name same
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
        className={`${robotoMono.variable} ${spaceGrotesk.variable} antialiased bg-dots min-h-screen`}
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
