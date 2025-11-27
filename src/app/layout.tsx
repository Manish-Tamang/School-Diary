import type { Metadata } from "next";
import { fontSans, fontMono } from "@/utils/fonts";

import "@/styles/globals.css";

import { cn } from "@/utils/cn";

import { ThemeProvider } from "./theme-provider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  authors: [{ name: "Manish Tamang", url: "https://manishtamang.com" }],
  category: "developer",
  creator: "Manish Tamang",
  openGraph: {
    images: [
      {
        width: 1920,
        height: 1080,
        url: "https://schooldairy.vercel.app/opengraph.jpg",
        alt: "School Dairy website cover",
      },
    ],
    locale: "en",
    siteName: "School Dairy",
    title: "School Dairy",
    description:
      "A school dairy built with Next.js and Firebase.",
    type: "website",
    url: "https://schooldairy.vercel.app",
  },
  publisher: "Manish Tamang",
  twitter: {
    images: [
      {
        width: 1920,
        height: 1080,
        url: "https://schooldairy.vercel.app/opengraph.jpg",
        alt: "School Dairy website cover",
      },
    ],
    card: "summary_large_image",
    title: "School Dairy",
    description:
      "A school dairy built with Next.js and Firebase.",
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
        className={cn(
          "overflow-x-hidden bg-background font-sans text-foreground antialiased outline-none",
          fontSans.variable,
          fontMono.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
