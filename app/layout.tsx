import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sedmarketing.com"),
  title: "SED Marketing",
  description: "Grow your business with SED Marketing.",
  openGraph: {
    images: [
      {
        url: '/favicon.ico',
        width: 1200,
        height: 630,
        alt: 'Logo',
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
  <link rel="icon" href="/favicon.ico" />
</head>
      <body className={font.className}>

        {children}
        <Analytics />

      </body>
    </html>
  );
}
