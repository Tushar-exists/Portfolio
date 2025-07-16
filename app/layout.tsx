// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { Navbar } from "@/components/navbar"; // Make sure this import path is correct for your project

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tushar.dev", // Sets the browser tab title to "Tushar.dev"
  description:
    "Portfolio of Tushar K Bhushan - Software Developer specializing in modern web technologies",
  keywords: [
    "Tushar Kumar",
    "Tushar",
    "Kumar",
    "Portfolio",
    "Software Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Tushar.dev", // Added as a keyword
  ],
  openGraph: {
    title: "Tushar K Bhushan- Full Stack Developer",
    description:
      "Portfolio of Tushar Kumar Bhushan - Software Developer specializing in modern web technologies",
    type: "website",
    url: "https://tushar.dev", // Assuming your domain will be tushar.dev
    siteName: "Tushar.dev", // Updated siteName
    locale: "en_US",
    images: [
      {
        url: "https://tushar.dev/og-image.png", // Updated URL
        width: 1200,
        height: 630,
        alt: "Tushar Kumar Bhushan - Full Stack Developer",
      },
    ],
  },
  twitter: {
    title: "Tushar K Bhushan - Full Stack Developer",
    description:
      "Portfolio of Tushar Kumar Bhushan - Software Developer specializing in modern web technologies",
    card: "summary_large_image",
    site: "@TusharKumarBhushan",
    creator: "@TusharKumarBhushan",
    images: [
      {
        url: "https://tushar.dev/og-image.png", // Updated URL
        width: 1200,
        height: 630,
        alt: "Tushar Kumar Bhushan - Full Stack Developer",
      },
    ],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Ensure Navbar is imported and developerInitial is set to "T" here */}
          <Navbar developerInitial="T" />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}